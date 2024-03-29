import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function  privacyandpolicy() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <form class="formaboutbg">
      <div class="aboutusheading">Privacy & Policy</div>
      <p class="para">Mohandas Karamchand Gandhi, who was also known as Mahatma, "Great Soul" Gandhi, was a hero, as well as a political and spiritual leader of India. He was of the Hindu faith, of which I am too. Mohandas brought India to independence by using non-violent resistance. He thought that there was injustice being served to the Indians, especially to the immigrants by the South Africans. Gandhi was born on October 2, 1869 in Porbandar, Kathiawar, now known as Gujarat. Gandhi passed away at the age of 78 on January 30, 1948. Mahatma Gandhi was brought up in India near Rajkot, where he did most of his studies. In 1888, Gandhi went to London, leaving his wife and son behind, to pursue his degree in law. Later in 1893, Gandhi went to South Africa to work and found that there was a lot of prejudice towards Indians. That was the reason Gandhi began protesting and eventually he became an inspiring hero for millions. The three main qualities that define Gandhi as a hero are his strong leadership, simplicity and bravery.</p>
      <p class="para">Leadership was one of Gandhi's heroic qualities. One way he demonstrated leadership was by encouraging people in his village to start using homespun clothing. Homespun was one of Gandhi’s favorite hobbies. Introducing homespun to his village promised the growth of the village’s economy. The poor became employed to make homespun clothes for others in the village and outside of their own village. This drastically diminished the poverty in Gandhi’s village. Moreover, Gandhi ended the issue of discrimination against untouchables. Back in those days, the Hindus used to discriminate against the untouchables, who were their own kind but just low in the caste system. The untouchables are just another word to describe poor, less educated people who really didn’t fit in with the middle class people. Gandhi made the Hindus realize that what British people were doing to them is the same thing that they were doing to the untouchables. This made the Hindus realize what they were doing to the untouchables. Last but not least, the Indian Independence Movement was the all-time heroic deed led by Gandhi. This movement was accomplished in 1947 by Mahatma. This movement took place because India was governed by the British, and Gandhi wanted India to become independent. Therefore, Gandhi showcased many outstanding leadership skills that made him a hero.</p>
<Button class="button2" variant="primary" onClick={handleShow}>
        Edit 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy And Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>hello</p>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
     
    </>
  );
}

export default privacyandpolicy;
