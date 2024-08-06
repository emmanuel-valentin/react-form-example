'use client';

import { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

/**
 * Todo este código puede refavorizarse.
 * Por ejemplo, es posible usar un custom hook para la lógica
 * de cada sección.
 */

interface Tab {
  key: number;
  title: string;
}

const tabs: Tab[] = [
  { key: 0, title: 'First section' },
  { key: 1, title: 'Second section' },
  { key: 2, title: 'Third section' },
];

export function RegisterForm() {
  /* Probable customHook: useTabs ------------------------------------- */
  const [key, setKey] = useState(0);

  const handleNextTab = () => {
    if (key + 1 > tabs.length - 1) return;
    setKey(key + 1);
  };

  const handlePreviousTab = () => {
    if (key - 1 < 0) return;
    setKey(key - 1);
  };
  /* Probable customHook: useTabs ------------------------------------- */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-gray-100 max-w-screen-md mx-auto p-4 rounded-md"
    >
      <Tabs activeKey={key} hidden>
        <Tab eventKey={0} className="my-2" title="First section">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="paswword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
        </Tab>
        <Tab eventKey={1} className="my-2" title="Second section">
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Tab>
        <Tab eventKey={2} className="my-2" title="Third section">
          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="github">
            <Form.Label>GitHub username</Form.Label>
            <Form.Control type="text" placeholder="Enter GitHub username" />
          </Form.Group>
        </Tab>
      </Tabs>
      <div className="flex justify-between">
        <Button
          className="w-24"
          onClick={handlePreviousTab}
          disabled={key === 0}
        >
          Previous
        </Button>
        <Button
          className="w-24"
          onClick={handleNextTab}
          hidden={key === tabs.length - 1}
        >
          Next
        </Button>
        <Button className="w-24" type="submit" hidden={key !== tabs.length - 1}>
          Enviar
        </Button>
      </div>
    </Form>
  );
}
