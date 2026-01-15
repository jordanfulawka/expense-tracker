'use client';

import Login from '@/components/Login';
import SubscriptionForm from '@/components/SubscriptionForm';
import SubscriptionsDisplay from '@/components/SubscriptionsDisplay';
import SubscriptionSummary from '@/components/SubscriptionSummary';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function Page() {
  const [isAddEntry, setIsAddEntry] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Entertainment',
    cost: '',
    currency: 'CAD',
    billingFrequency: 'Monthly',
    nextBillingDate: '',
    paymentMethod: 'Credit',
    startDate: '',
    renewalType: '',
    notes: '',
    status: 'Active',
  });

  const { handleDeleteSubscription, userData, currentUser } = useAuth();
  const isAuthenticated = !!currentUser;

  function handleChangeInput(e) {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  }

  function handleEditSubscription(index) {
    const data = userData.subscriptions.find((val, valIndex) => {
      return valIndex === index;
    });
    setFormData(data);
    handleDeleteSubscription(index);
    setIsAddEntry(true);
  }

  function handleToggleInput() {
    setIsAddEntry((prev) => !prev);
  }

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <>
      <SubscriptionSummary />
      <SubscriptionsDisplay
        handleEditSubscription={handleEditSubscription}
        handleShowInput={isAddEntry ? () => {} : handleToggleInput}
      />
      {isAddEntry && (
        <SubscriptionForm
          onSubmit={() => {}}
          closeInput={handleToggleInput}
          formData={formData}
          handleChangeInput={handleChangeInput}
        />
      )}
    </>
  );
}
