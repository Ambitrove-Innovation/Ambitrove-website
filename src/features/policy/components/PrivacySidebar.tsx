interface PrivacySidebarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const PrivacySidebar = ({
  activeSection,
  scrollToSection,
}: PrivacySidebarProps) => {
  const sidebarLinks = [
    { id: "introduction", label: "Introduction" },
    { id: "information-collect", label: "Information We Collect" },
    { id: "how-use-data", label: "How We Use Data" },
    { id: "storage-security", label: "Storage & Security" },
    { id: "your-rights", label: "Your Rights" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-24">
        <div className=" p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition">
          <h3 className="text-sm font-semibold text-green-500 uppercase tracking-wide mb-4">
            On This Page
          </h3>
          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === link.id
                    ? "bg-teal-50 text-green-500 font-medium border-l-2 border-green-500"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-800"
                }`}>
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default PrivacySidebar;
