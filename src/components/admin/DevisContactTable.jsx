import {
  FaPaperPlane,
  FaCheck,
  FaTimes,
  FaEnvelope,
  FaFileInvoice,
} from "react-icons/fa";

export default function DevisContactTable({ data, type, onSendDevis }) {
  const getStatusBadge = (status) => {
    const statusClasses = {
      pending: "bg-yellow-100 text-yellow-800",
      processed: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      new: "bg-blue-100 text-blue-800",
      in_progress: "bg-purple-100 text-purple-800",
      resolved: "bg-gray-100 text-gray-800",
    };

    const statusText = {
      pending: "En attente",
      processed: "Traité",
      rejected: "Rejeté",
      new: "Nouveau",
      in_progress: "En cours",
      resolved: "Résolu",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs ${statusClasses[status]}`}
      >
        {statusText[status]}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {type === "devis" ? "Client" : "Expéditeur"}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {type === "devis" ? "Service" : "Sujet"}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {type === "devis" ? (
                        <FaFileInvoice className="text-gray-600" />
                      ) : (
                        <FaEnvelope className="text-gray-600" />
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {type === "devis" ? item.service : "Message de contact"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(item.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {type === "devis" ? (
                    <>
                      <button
                        onClick={() => onSendDevis(item._id)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                        title="Envoyer le devis"
                      >
                        <FaPaperPlane />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900 mr-3"
                        title="Marquer comme traité"
                      >
                        <FaCheck />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        title="Rejeter la demande"
                      >
                        <FaTimes />
                      </button>
                    </>
                  ) : (
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      title="Répondre"
                    >
                      <FaEnvelope />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
