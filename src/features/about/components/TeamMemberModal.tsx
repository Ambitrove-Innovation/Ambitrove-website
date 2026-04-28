import { useEffect, useRef } from "react";
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
  const modalRef = useRef<HTMLDivElement>(null);

  // Accessibility: Handle Escape key and Scroll Lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Lock scroll
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    // Focus management: Focus the modal when it opens
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-8 relative text-white shadow-2xl animate-in zoom-in-95 duration-300 focus:outline-none"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20"></div>
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-2 border-green-500/50 relative z-10"
            />
          </div>
          
          <h2 id="modal-title" className="text-3xl font-bold font-inter mb-1">
            {member.name}
          </h2>
          <p className="text-green-500 font-medium mb-6">
            {member.position}
          </p>
          
          <div className="w-12 h-1 bg-green-500/30 rounded-full mb-6"></div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
