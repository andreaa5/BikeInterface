import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/Footer.css';

function Footer({ data }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <footer className="footer">
            <div className="footer-container">
                <span
                    style={{ cursor: 'pointer', color: '#aaa' }}
                    onClick={handleShow}
                >
                    © Pictures
                </span>
                <p className="text-muted">Made with ❤️ by Andrea</p>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pictures from unsplash by:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.map((imageData) => (
                        <div key={imageData.id}>
                            {imageData.image_author} - {imageData.name}
                            <br />
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </footer>
    );
}

export default Footer;