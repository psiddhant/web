import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mt-24 mb-[550px] max-h-[2000px]'>
   <div>
   <h1 className='text-3xl ml-9'>
        Terms & Conditions
      </h1>
      <p className='ml-14 mt-4'>Last updated on 16-08-2024 23:11:24</p>
      <p className='ml-14 mt-6'>These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding
        agreement by and between JAIVIKHABITAT FARMER HORICULTURE PRIVATE LIMITED, (
        “Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our
        website, goods (as applicable) or services (as applicable) (collectively, “Services”).
        By using our website and availing the Services, you agree that you have read and accepted these Terms
        (including the Privacy Policy). We reserve the right to modify these Terms at any time and without
        assigning any reason. It is your responsibility to periodically review these Terms to stay informed of
        updates.</p>
      <p className='ml-14 mt-6'>The use of this website or availing of our Services is subject to the following terms of use:</p>
      <ul className='mt-4 ml-14'>
        <li classname="ml-14 mb-5 pb-6">To access and use the Services, you agree to provide true, accurate and complete information to us
          during and after registration, and you shall be responsible for all acts done through the use of your
          registered account</li>
        <li classname="ml-14 mb-5 pb-6 mt-2">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
          performance, completeness or suitability of the information and materials offered on this website
          or through the Services, for any specific purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors and we expressly exclude liability for any such
          inaccuracies or errors to the fullest extent permitted by law.
        </li>
        <li classname="ml-14 mb-5 pb-6">Your use of our Services and the websiteis solely at your own risk and discretion.. You are
          required to independently assess and ensure that the Services meet your requirements.
        </li>
        <li classname="ml-14 mb-5 pb-6">The contents of the Website and the Services are proprietary to Us and you will not have any
          authority to claim any intellectual property rights, title, or interest in its contents</li>
        <li classname="ml-14 mb-5 pb-6">You acknowledge that unauthorized use of the Website or the Services may lead to action against
          you as per these Terms or applicable laws.
        </li>
        <li classname="ml-14 mb-5 pb-6">You agree to pay us the charges associated with availing the Services</li>
        <li classname="ml-14 mb-5 pb-6">You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or
          forbidden by these Terms, or Indian or local laws that might apply to you.</li>
        <li classname="ml-14 mb-5 pb-6">You agree and acknowledge that website and the Services may contain links to other third party
          websites. On accessing these links, you will be governed by the terms of use, privacy policy and
          such other policies of such third party websites.
        </li>
        <li classname="ml-14 mb-5 pb-6">You understand that upon initiating a transaction for availing the Services you are entering into a
          legally binding and enforceable contract with the us for the Services.</li>
        <li classname="ml-14 mb-5 pb-6">You shall be entitled to claim a refund of the payment made by you in case we are not able to
          provide the Service. The timelines for such return and refund will be according to the specific
          Service you have availed or within the time period provided in our policies (as applicable). In case
          you do not raise a refund claim within the stipulated time, than this would make you ineligible for
          a refund.</li>
        <li classname="ml-14 mb-5 pb-6">Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to
          perform an obligation under these Terms if performance is prevented or delayed by a force majeure
          event.</li>
        <li classname="ml-14 mb-5 pb-6">These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and
          construed in accordance with the laws of India.
        </li>
        <li classname="ml-14 mb-5 pb-6">All disputes arising out of or in connection with these Terms shall be subject to the exclusive
          jurisdiction of the courts in BAREILLY, Uttar Pradesh</li>
        <li classname="ml-14 mb-5 pb-6">All concerns or communications relating to these Terms must be communicated to us using the
          contact information provided on this website.</li>
      </ul>
   </div>

  <div className='mt-8'>
  <Link className='ml-40 text-2xl  font-bold font-[barlow] mt-40 uppercase' href={"/refundpolicy"}>See Refund Policy</Link>
  </div>
    </div>
  )
}

export default page