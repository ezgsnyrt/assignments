import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TaskFeatures from "../TaskFeatures";
import TaskTrackerService from '../TaskTrackerService';

interface EditModalProps {
    task: TaskFeatures | null,
    show: boolean,
    setShow: CallableFunction,
    resetEditedTask: CallableFunction
}

function EditModal({ task, show, setShow,  resetEditedTask }: EditModalProps) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
        if (task != null) {
            setText(task.text);
            setShow(true);
        } else {
            setShow(false);
        }
  }, [task]);

  const handleClose = () => {
        console.log("here")
        setShow(false)
        resetEditedTask()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        console.log(value);
        setText(value)
  }

  const handleSave = () => {
    if (text != '' && task !== null) {
        TaskTrackerService.updateTask({...task, text: text})
        setShow(false);
    }
  }

  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={() => {
            setShow(false)
            resetEditedTask()
        }}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" value={text} onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;