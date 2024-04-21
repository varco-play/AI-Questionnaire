import React, { useState } from 'react';

interface PersonalInformation {
  fullName: string;
  phoneNumber: string;
  email: string;
  placeOfBirth: string;
  major: string;
  subMajor: string;
}

const PersonalInformationPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<PersonalInformation>({
    fullName: '',
    phoneNumber: '',
    email: '',
    placeOfBirth: '',
    major: '',
    subMajor: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      major: value,
      subMajor: '', // Reset subMajor when major changes
    }));
  };

  const handleSave = () => {
    localStorage.setItem('personalInfo', JSON.stringify(formData));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 md:mr-2">
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-2">
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 md:mr-2">
            <label className="block text-sm font-medium mb-1">Major *</label>
            <select
              name="major"
              value={formData.major}
              onChange={handleMajorChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select a Major</option>
              <option value="softwareEngineering">Software Engineering</option>
              <option value="dataScience">Data Science</option>
              {/* Add more majors as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/2 md:ml-2">
            <label className="block text-sm font-medium mb-1">{formData.major ? 'Sub-Major' : ''}</label>
            <select
              name="subMajor"
              value={formData.subMajor}
              onChange={handleInputChange}
              disabled={!formData.major}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select a Sub-Major</option>
              {formData.major === 'softwareEngineering' && (
                <>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
                </>
              )}
              {/* Add more sub-majors based on the selected major */}
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Save
          </button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationPopup;
