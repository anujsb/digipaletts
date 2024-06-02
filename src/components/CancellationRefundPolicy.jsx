import React from 'react';

const CancellationRefundPolicy = () => {
    return (
        <div className="p-6 bg-gray-100 text-gray-900">
            <h1 className="text-2xl font-bold mb-4">Cancellation and Refund Policy for Digi Palettes</h1>

            <h2 className="text-xl font-semibold mb-3">Services Offered by Digi Palettes:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Digital Marketing</li>
                <li>Social Media Marketing</li>
                <li>Paid Advertising</li>
                <li>SEO Services</li>
                <li>Website Design and Development</li>
                <li>Branding</li>
                <li>Graphic Designing</li>
                <li>Video Marketing Services</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3">Cancellation and Refund Policy</h2>
            <p className="mb-4">
                This policy outlines the rules and regulations for cancellations and refunds for services provided by Digi Palettes.
            </p>

            <h3 className="text-lg font-semibold mb-2">Order Cancellation Within 24 Hours:</h3>
            <p className="mb-4">
                If you wish to cancel your order within 24 hours of placing it, you are eligible for a 75% refund.
                Cancellations must be made within this 24-hour window; otherwise, the cancellation will not be processed if work has already commenced.
            </p>

            <h3 className="text-lg font-semibold mb-2">Cancellation After Work Has Started:</h3>
            <p className="mb-4">
                If you cancel after the work on your project has started, no refunds will be given for the services already rendered.
                If the cancellation is made after the start of the billing cycle, clients will be billed for the hours worked on the project during that month. This amount must be paid by the client.
            </p>

            <h3 className="text-lg font-semibold mb-2">Non-Utilization of Services:</h3>
            <p className="mb-4">
                If you signed up for our services but did not utilize them, you are still required to pay the applicable fees. There are no refunds for non-utilization.
            </p>

            <h3 className="text-lg font-semibold mb-2">Abandoned or Dormant Projects:</h3>
            <p className="mb-4">
                No refunds will be provided for deposits or payments made if the projects are abandoned or remain dormant once they are in progress.
            </p>

            <p className="mb-4">
                By using our services, you agree to this Cancellation and Refund Policy. If you have any questions or need further clarification, please <a href="/Contact" className="text-blue-600 underline">contact us</a>.
            </p>
        </div>
    );
};

export default CancellationRefundPolicy;
