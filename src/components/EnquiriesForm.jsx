import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export default async function EnquiriesForm () {

  async function UpdateEnquiries(formData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

  
  await db.query(`INSERT INTO enquiries (name, email, subject, message) VALUES ($1, $2, $3, $4)`, [name, email, subject, message]);
  revalidatePath("/trainers");
    redirect("/trainers");
  }
  


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Enquiries Form</h2>
      <p className="pb-3">Send an Enquiry to our team with any questions on how we can best support you to achieve your StayActive goals.</p>
      <form className="space-y-4" action={UpdateEnquiries}>
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
          name="name"
            type="text"
            placeholder="Enter your Full Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
          name="email"
            type="email"
            placeholder="Enter your Email Address"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Subject:</label>
          <input
          name="subject"
            type="text"
            placeholder="Enter a Subject"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
          name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
            placeholder="Type in a Message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};



