const AdditionalSections = () => {
  return (
    <div className="space-y-6 fade-in">
      {/* Cookies */}
      <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition">
        <h2 className="text-2xl inter font-bold ">
          6. Cookies and Tracking Technologies
        </h2>
        <p className=" leading-relaxed">
          We use cookies and similar tracking technologies to track activity on
          our website and store certain information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent.
        </p>
      </div>

      {/* Data Retention */}
      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition">
        <h2 className="text-2xl inter font-bold text-white mb-4">
          7. Data Retention
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </div>

      {/* International Transfers */}
      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition">
        <h2 className="text-2xl inter font-bold text-white mb-4">
          8. International Data Transfers
        </h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Your information may be transferred to and maintained on servers
          located outside of South Africa. We ensure appropriate safeguards are
          in place for such transfers, including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
          <li>Using cloud providers with GDPR compliance</li>
          <li>Implementing standard contractual clauses</li>
          <li>Ensuring adequate data protection measures</li>
        </ul>
      </div>

      {/* Changes to Policy */}
      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition">
        <h2 className="text-2xl inter font-bold text-white mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last Updated" date. You are advised to review this
          Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
};

export default AdditionalSections;
