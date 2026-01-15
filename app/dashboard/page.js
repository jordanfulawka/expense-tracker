'use client';

import Login from '@/components/Login';
import SubscriptionForm from '@/components/SubscriptionForm';
import SubscriptionsDisplay from '@/components/SubscriptionsDisplay';
import SubscriptionSummary from '@/components/SubscriptionSummary';
import { useState } from 'react';

export default function Page() {
  const isAuthenticated = false;
  const [isAddEntry, setIsAddEntry] = useState(false);

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
        handleShowInput={isAddEntry ? () => {} : handleToggleInput}
      />
      {isAddEntry && (
        <SubscriptionForm onSubmit={() => {}} closeInput={handleToggleInput} />
      )}
    </>
  );
}
