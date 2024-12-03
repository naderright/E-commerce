'use client'
import React, { useState } from 'react'

function Reviews_Comment({product}) {
    const [activeTab, setActiveTab] = useState("reviews"); // reviews | addComment

    return (
        <div className="mt-12">
            <div className="flex space-x-8 border-b">
                <button
                    onClick={() => setActiveTab("reviews")}
                    className={`py-2 px-4 ${activeTab === "reviews" ? "border-b-2 border-gray-800" : ""
                        }`}
                >
                    Reviews
                </button>
                <button
                    onClick={() => setActiveTab("addComment")}
                    className={`py-2 px-4 ${activeTab === "addComment" ? "border-b-2 border-gray-800" : ""
                        }`}
                >
                    Add Comment
                </button>
            </div>

            {activeTab === "reviews" ? (
                <div className="mt-4">
                    {product.reviews.map((review, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                            <h4 className="text-lg font-semibold">{review.reviewerName}</h4>
                            <p className="text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <form className="mt-6">
                    <textarea
                        className="w-full p-4 border rounded-md"
                        rows="4"
                        placeholder="Write your comment..."
                    ></textarea>
                    <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                        Submit
                    </button>
                </form>
            )}
        </div>
    )
}

export default Reviews_Comment
