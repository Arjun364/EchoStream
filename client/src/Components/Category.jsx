import React, { useState } from 'react'
import { Card, Button, Flowbite } from "flowbite-react";
import { AiFillDelete } from "react-icons/ai";
import { addVideoToCategoryAPI, deleteCategoryAPI, getParticularCategoryAPI, getVideoDetailsAPI } from '../services/allAPIs';


const Category = ({ details }) => {

    // const [videoDetails,SetVideosDetails] = useState({})

    const deleteCategory = async () => {
        await deleteCategoryAPI(details.id)
        window.location.reload()
    }

    const customTheme = {
        card: {
            "root": {
                "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-transparent",
                "children": "flex h-full flex-col justify-center gap-4 p-6",
                "horizontal": {
                    "off": "flex-col",
                    "on": "flex-col md:max-w-xl md:flex-row"
                },
                "href": "hover:bg-gray-800"
            }
        },
        button: {
            color: {
                red: 'bg-red-500 hover:bg-blue-600', // Custom color for the button
            },
        }
    }

    // it is function used for the spot for dragged item to dropped
    const videoDropped = async (e, categoryId) => {
        const videoId = e.dataTransfer.getData("videoId")
        console.log(`Video dropped successfully , category id: ${categoryId} and video Id :${videoId}`);
        console.log(e);

        try {
            // Fetch video details by videoId
            const { data: videoDetails } = await getVideoDetailsAPI(videoId);
    
            if (videoDetails) {
                // Get the category by id to update it with new videos
                const { data: categoryDetails } = await getParticularCategoryAPI(categoryId);
                const updatedVideos = [...categoryDetails.Videos, videoDetails.caption]; // Add new video's caption to the category's Videos array
    
                // Prepare the updated category object
                const updatedCategory = {
                    ...categoryDetails,
                    Videos: updatedVideos
                };
    
                // Update the category with the new video
                const response = await addVideoToCategoryAPI(categoryId, updatedCategory);
                console.log(response);
    
                if (response) {
                    // Update the UI to reflect changes (e.g., refresh, or update state)
                    window.location.reload(); // You can use state management instead for a smoother UX
                }
            }
        } catch (error) {
            console.error("Error while adding video to category:", error);
        }

    }

    //  its is the function for setting the drag over above the drop
    const dargOver = (e) => {
        e.preventDefault()
        console.log(`Video is over`);
        console.log(e);
    }

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Card className="max-w-sm"  >
                <h4 className="heading4 flex items-center justify-between">{details.categoryName}<Button color={"red"} className='w-[2.5rem]'><AiFillDelete className='text-[1rem]' onClick={deleteCategory} /></Button></h4>
                <div className='flex flex-col gap-3' droppable="true" onDragOver={(e) => dargOver(e)} onDrop={(e) => videoDropped(e, details.id)}>
                    {/* Render the videos if details.Videos is defined */}
                    {details.Videos && details.Videos.length !== 0 ? (
                        details.Videos.map((item, index) => (
                            <span key={index} className='w-full rounded-md dark:bg-gray-800 px-3 py-4 text-gray-400 '>
                                {item}
                            </span>
                        ))
                    ) : (
                        <span>No videos available</span>
                    )}
                </div>
            </Card>
        </Flowbite>
    )
}

export default Category