import React, { useState } from 'react';

const SubdomainSwitcher = () => {
  const [value, setValue] = useState('');
  return (
    <form
      className="flex pt-4 text-base"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name=""
        id=""
        className="px-1 py-2 border"
        onChange={(e) => setValue(e.currentTarget.value.replaceAll(/\W/g, ''))}
        value={value}
      />
      <button
        type="submit"
        className="px-2 font-medium bg-gray-200"
        onClick={() => {
          if (value) {
            const isDev = process.env.NODE_ENV === 'development';
            window.location.href = isDev
              ? `https://${value}.localhost`
              : `https://${value}.awildcard.gq`;
          }
        }}
      >
        Go to this domain
      </button>
    </form>
  );
};

export default SubdomainSwitcher;
