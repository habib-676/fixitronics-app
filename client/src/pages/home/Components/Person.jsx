const Person = ({ person }) => {
  const { photo, name, role, quote } = person;
  return (
    <div className="max-w-xs mx-auto text-center p-6 bg-base-100 border border-base-300 rounded-3xl shadow-xl text-primary-content">
      <div className="flex justify-center -mt-16">
        <img
          src={photo}
          alt={name}
          className="w-28 h-28 rounded-full border-4 border-primary shadow-lg object-cover"
        />
      </div>

      <div className="mt-6 border-t border-base-300 pt-6 space-y-2">
        <h3 className="text-xl font-bold tracking-wide text-primary">{name}</h3>
        <p className="text-sm text-secondary-content font-medium">{role}</p>
        <p className="text-sm italic text-secondary-content">"{quote}"</p>
      </div>
    </div>
  );
};

export default Person;
