export default function SelectedButton({ children, variation, selected, ...props }) {
    return (<button
        {...props}
        className={`title mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out 
			${variation === "primary"
                ? selected
                    ? "bg-gray-700 text-gray-100 border-gray-700 border-2"
                    : "bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700"
                : selected
                    ? "bg-gray-700 text-gray-100 border-2 border-gray-700"
                    : "transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100"
            }
		`}
    >
        {children}
    </button>);
};

