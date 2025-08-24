import React, { useState } from 'react'
import axios from 'axios'

const PadGeneration = () => {
  const [form, setForm] = useState({
    receiverEmail: '',
    subject: '',
    statement: '',
    authorizedBy: '',
    authorizerName: '',
    contactEmail: '',
    contactPhone: '',
    address: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const url = import.meta.env.VITE_BACKEND_URL
  const slug = localStorage.getItem('slug')
  const token = localStorage.getItem('token')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const res = await axios.post(
        `${url}/user/pad/send`,
        { slug, ...form },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setMessage(res.data.message || 'Pad generated and sent successfully!')
      setForm({
        receiverEmail: '',
        subject: '',
        statement: '',
        authorizedBy: '',
        authorizerName: '',
        contactEmail: '',
        contactPhone: '',
        address: ''
      })
    } catch (err) {
      setMessage(
        err.response?.data?.message || 'Failed to generate pad. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Academic Pad Generation</h2>
      {message && (
        <div className="mb-4 text-center text-sm text-white bg-blue-500 p-2 rounded">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="receiverEmail"
          value={form.receiverEmail}
          onChange={handleChange}
          placeholder="Receiver Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="statement"
          value={form.statement}
          onChange={handleChange}
          placeholder="Statement"
          className="border p-2 rounded"
          rows={6}
          required
        />
        <input
          type="text"
          name="authorizedBy"
          value={form.authorizedBy}
          onChange={handleChange}
          placeholder="Authorized By"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="authorizerName"
          value={form.authorizerName}
          onChange={handleChange}
          placeholder="Authorizer Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="contactEmail"
          value={form.contactEmail}
          onChange={handleChange}
          placeholder="Contact Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="contactPhone"
          value={form.contactPhone}
          onChange={handleChange}
          placeholder="Contact Phone"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 transition"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate & Send Pad'}
        </button>
      </form>
    </div>
  )
}

export default PadGeneration