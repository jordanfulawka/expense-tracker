'use client';

function SubscriptionForm() {
  return (
    <section>
      <h2>Add a new subscription</h2>
      <form onSubmit={() => {}}>
        <label>
          <span>Subscription Name</span>
          <input
            type='text'
            name='name'
            placeholder='e.g. Netflix, Spotify, AWS Hosting'
            required
          />
        </label>
        <label>
          <span>Category</span>
          <select name='categorty'>
            {[
              'Entertainment',
              'Music',
              'Software',
              'Web Services',
              'Health & Fitness',
              'Other',
            ].map((cat, catIndex) => {
              return <option key={catIndex}>{cat}</option>;
            })}
          </select>
        </label>
        <label>
          <span>Cost</span>
          <input
            type='number'
            name='cost'
            step='0.01'
            placeholder='e.g. 12.00'
            required
          />
        </label>
        <label>
          <span>Currency</span>
          <select name='currency'>
            {['CAD', 'USD', 'EUR', 'GBP', 'AUD', 'Other'].map(
              (cur, curIndex) => {
                return <option key={curIndex}>{cur}</option>;
              }
            )}
          </select>
        </label>
        <label>
          <span>Billing Frequency</span>
          <select name='billingFrequency'>
            {['Monthly', 'Yearly', 'Quarterly', 'One-time'].map(
              (freq, freqIndex) => {
                return <option key={freqIndex}>{freq}</option>;
              }
            )}
          </select>
        </label>
        <label>
          <span>Payment Method</span>
          <select name='paymentMethod'>
            {['Credit', 'Debit', 'Paypal', 'Bank Transfer'].map(
              (method, methodIndex) => {
                return <option key={methodIndex}>{method}</option>;
              }
            )}
          </select>
        </label>
        <label>
          <span>Subscription Start Date</span>
          <input type='date' name='startDate' required />
        </label>
        <label>
          <span>Status</span>
          <select name='status'>
            {['Active', 'Paused', 'Cancelled'].map((status, statusIndex) => {
              return <option key={statusIndex}>{status}</option>;
            })}
          </select>
        </label>
        <label className='fat-column'>
          <span>Notes</span>
          <textarea
            name='notes'
            placeholder='e.g. Shared with family, includes cloud storage'
          />
        </label>
        <div className='fat-column form-submit-btns'>
          <button>Cancel</button>
          <button type='submit'>Add Subscription</button>
        </div>
      </form>
    </section>
  );
}

export default SubscriptionForm;
