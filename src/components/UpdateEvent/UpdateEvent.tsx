// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";

// type TCategory = "Work" | "Personal" | "Other";

// export type Event = {
//   _id?: string;
//   title: string;
//   date: string;
//   time: string;
//   notes: string;
//   category: TCategory;
// };

// interface Props {
//   event: Event;
//   onUpdate: (updatedEvent: Event) => void;
//   onCancel?: () => void;
// }

// export default function UpdateEvent({ event, onUpdate, onCancel }: Props) {
//   const [formData, setFormData] = useState<Event>({ ...event });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   return (
//     <div className="bg-slate-200 py-5 min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 max-w-md mx-auto p-8 bg-white rounded-xl shadow-md"
//       >
//         <div>
//           <Label className="mb-2" htmlFor="title">
//             Title
//           </Label>
//           <Input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <Label className="mb-2" htmlFor="date">
//             Date
//           </Label>
//           <Input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <Label className="mb-2" htmlFor="time">
//             Time
//           </Label>
//           <Input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <Label className="mb-2" htmlFor="category">
//             Category
//           </Label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border border-input bg-background rounded-md px-3 py-2"
//           >
//             <option value="Work">Work</option>
//             <option value="Personal">Personal</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div>
//           <Label className="mb-2" htmlFor="notes">
//             Notes
//           </Label>
//           <Textarea
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="flex justify-end gap-2">
//           {onCancel && (
//             <Button type="button" variant="secondary" onClick={onCancel}>
//               Cancel
//             </Button>
//           )}
//           <Button type="submit">Update Event</Button>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateEventForm({ eventId }: { eventId: string }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    notes: "",
    category: "Work",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/events/${eventId}`).then((res) => {
      setForm(res.data);
    });
  }, [eventId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/events/${eventId}`, form);
    alert("Event updated!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow"
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border p-2 mb-3"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
      />
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes"
        className="w-full border p-2 mb-3"
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Update
      </button>
    </form>
  );
}
