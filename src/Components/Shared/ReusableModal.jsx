import PropTypes from "prop-types";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

const ReusableModal = ({ isOpen, onRequestClose, title, children }) => {
    return (
        <Modal
            isOpen={isOpen} // Controls modal visibility
            onRequestClose={onRequestClose} // Function to close the modal
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
            contentLabel={title || "Modal"}
        >
            {/* Modal Header */}
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            {/* Modal Content */}
            <div>{children}</div>

            {/* Close Button */}
            <button
                onClick={onRequestClose}
                className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
            >
                Close Modal
            </button>
        </Modal>
    );
};

// Add PropTypes validation
ReusableModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,  // onRequestClose should be a function
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ReusableModal;
