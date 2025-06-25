import { FaAmbulance } from 'react-icons/fa';
import { FaCreditCard, FaCar, FaWheelchair } from 'react-icons/fa';
import { iconTypes } from './../../../node_modules/sweetalert2/src/utils/classes';

const Additional = () => {

  const additionalInfos = [
    {
      iconTypes: FaAmbulance,
      title: "Emergency Care",
      description: "For dental emergencies outside of regular hours, please call our emergency hotline at 01515267655."
    },
    {
      iconTypes: FaCreditCard,
      title: "Insurance & Payments",
      description: "We accept most major insurance plans and offer flexible payment options for your convenience."
    },
    {
      iconTypes: FaCar,
      title: "Parking Information",
      description: "Free parking is available in our dedicated lot. Street parking is also available nearby."
    },
    {
      iconTypes: FaWheelchair,
      title: "Accessibility",
      description: "Our facility is fully ADA compliant with wheelchair access and accommodations for all patients."
    }
  ]

  return (
    <div className="py-12 px-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Additional Information</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          additionalInfos.map((info, index) => (
            <div key={index} className="flex flex-col justify-start gap-2 bg-white shadow-md rounded-xl p-6 max-w-xs text-sm">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <info.iconTypes className="text-[#3b82f6] text-xl" />
                {info.title}
              </div>
              <p className="text-gray-600 text-start">{info.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Additional;