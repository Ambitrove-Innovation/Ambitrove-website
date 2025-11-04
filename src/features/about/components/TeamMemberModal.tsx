import { X } from "lucide-react";

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    position: string;
    image: string;
    bio: string;
  } | null;
}

const TeamMemberModal = ({ isOpen, onClose, member }: TeamMemberModalProps) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 gradient-Green-bg bg-opacity-80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-black rounded-2xl outline-1 hover:outline-white max-w-lg w-full p-6 relative text-white shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-green-500 hover:text-red-500 transition">
          <X size={22} />
        </button>

        <div className="flex flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-green-500 mb-4"
          />
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <p className="text-green-600 mb-4">{member.position}</p>
          <p className="text-gray-700 leading-relaxed">{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
