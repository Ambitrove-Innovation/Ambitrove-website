// AudienceToggle.tsx

interface Props {
  audience: AudienceType;
  setAudience: (a: AudienceType) => void;
}

export function AudienceToggle({ audience, setAudience }: Props) {
  return (
    <div className="flex gap-3">
      {["individual", "team"].map((type) => (
        <button
          key={type}
          onClick={() => setAudience(type as AudienceType)}
          className={`px-5 py-2 rounded-full ${
            audience === type
              ? "bg-white text-black"
              : "bg-neutral-800 text-neutral-400"
          }`}>
          {type}
        </button>
      ))}
    </div>
  );
}
