import { useEffect, useState } from "react";
import { FaEnvelope, FaFileInvoice, FaSearch } from "react-icons/fa";
import DevisContactTable from "../components/Admin/DevisContactTable";
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("devis");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({
    devis: [],
    contacts: [],
    stats: {
      totalDevis: 0,
      pendingDevis: 0,
      totalContacts: 0,
      newContacts: 0,
    },
  });

  useEffect(() => {
    // Fonction pour charger les données
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Charger les devis
        const devisRes = await fetch("http://localhost:5000/api/devis", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const devisData = await devisRes.json();

        // Charger les contacts
        const contactsRes = await fetch("http://localhost:5000/api/contacts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const contactsData = await contactsRes.json();

        // Calculer les stats
        const stats = {
          totalDevis: devisData.data.length,
          pendingDevis: devisData.data.filter((d) => d.status === "pending")
            .length,
          totalContacts: contactsData.data.length,
          newContacts: contactsData.data.filter((c) => c.status === "new")
            .length,
        };

        setData({
          devis: devisData.data,
          contacts: contactsData.data,
          stats,
        });
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, []);

  const handleSendDevis = async (id) => {
    try {
      // Implémentez la logique d'envoi de devis ici
      console.log("Envoi du devis", id);
      // Mettre à jour le statut dans l'interface
    } catch (error) {
      console.error("Erreur lors de l'envoi du devis:", error);
    }
  };

  //filtrer les donnees
  const filteredData =
    activeTab === "devis"
      ? data.devis.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.service.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : data.contacts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Tableau de bord administrateur
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <FaFileInvoice size={20} />
              </div>
              <div>
                <p className="text-gray-500">Demandes de devis</p>
                <p className="text-2xl font-bold">{data.stats.totalDevis}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                <FaFileInvoice size={20} />
              </div>
              <div>
                <p className="text-gray-500">Devis en attente</p>
                <p className="text-2xl font-bold">{data.stats.pendingDevis}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-gray-500">Messages reçus</p>
                <p className="text-2xl font-bold">{data.stats.totalContacts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-gray-500">Nouveaux messages</p>
                <p className="text-2xl font-bold">{data.stats.newContacts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contrôles */}
        <div className="bg-white rounded-lg shadow mb-6 p-4 flex flex-wrap justify-between items-center">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button
              onClick={() => setActiveTab("devis")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "devis" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Demandes de devis
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "contacts"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Messages de contact
            </button>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Tableau */}
        <DevisContactTable
          data={filteredData}
          type={activeTab}
          onSendDevis={handleSendDevis}
        />
      </div>
    </div>
  );
}
