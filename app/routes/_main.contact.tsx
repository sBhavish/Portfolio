import { HeadersFunction } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { CACHE_LIV, blogs } from "~/Constants"
import 'highlight.js/styles/github.css';


export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const meta: MetaFunction = ({ data }) => {
    return [
        { title: 'Contact | Bhavish' },
        {
            name: 'description',
            content: `Contact Bhavish`,
        },
    ]
}
export default function Contact() {

    return (
        <main className="py-6 flex flex-col gap-6 font-mono px-4">
            <h1 className="lg:text-4xl text-3xl text-center h-fit tracking-wide">Contact Me</h1>
            <p className="md:text-center text-pretty max-w-2xl mx-auto">Let's get this conversation started. Tell me a bit about yourself, and I'll get in touch with you as soon as i can.</p>
            <Form className="w-full max-w-lg mx-auto grid" method="post">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name<sup>*</sup>
                        </label>
                        <input className="appearance-none capitalize block w-full bg-gray-200 border-dashed text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jon Doe"/>
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            E-mail<sup>*</sup>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 border-dashed text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="jon@hotmail.com" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 border-dashed text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea id="message" className="appearance-none block w-full h-20 bg-gray-200 text-gray-700 border border-gray-200 border-dashed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <button type="reset" className="flex p-2 mx-auto items-center gap-2 border-dotted border-4 bg-gray-200 hover:bg-transparent focus-within:bg-transparent outline-dashed">
                            Clear 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8 8 8 8m0-8-8 8" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <button type="submit" className="flex p-2 mx-auto items-center gap-2 border-dotted border-4 bg-gray-200 hover:bg-transparent focus-within:bg-transparent outline-dashed">
                            Submit
                            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.5 7 10l4-5" stroke="#000" /></svg>
                        </button>
                    </div>
                </div>
            </Form>
        </main>
    )
}