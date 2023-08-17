const Language = () => {
  return (
    <div className="flex justify-center gap-x-1
                    lg:gap-x-4">
      <button
        className="hover:text-textAccent transition font-medium"
        type="button"
      >
        UA
      </button>
      <button
        className="hover:text-textAccent transition font-medium"
        type="button"
      >
        EN
      </button>
    </div>
  );
};

export default Language;
