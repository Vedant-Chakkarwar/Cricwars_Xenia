/* eslint-disable react/prop-types */
import { Modal } from 'react-bootstrap'

const MyModal = ({ children, title, show = true, setShow, click, btn2 = false }) => {
    return (
        <div>
            <Modal show={show} onHide={() => setShow(false)}>
                {title && (<Modal.Header closeButton>
                    <Modal.Title className="modal_title">{title}</Modal.Title>
                </Modal.Header>)}
                <Modal.Body>
                    {children}
                </Modal.Body>
                {click && <Modal.Footer>
                    <button className="bg-gray-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg" onClick={click}>
                        Close
                    </button>
                    {btn2 && <button type='submit'
                        className="bg-blue-500 text-black p-2 px-5 rounded-xl m-4 font-medium text-lg"
                        onClick={btn2.click}>
                        {btn2.text}
                    </button>}
                </Modal.Footer>}
            </Modal>
        </div>
    )
}

export default MyModal
