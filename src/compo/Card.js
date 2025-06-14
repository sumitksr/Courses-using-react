import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Logic
        if (likedCourses.includes(props.course.id)) {
            // pahle se liked 
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='bg-bgDark w-[300px] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
            <div className='relative'>
                <img 
                    src={props.course.image.url} 
                    alt={props.course.title} 
                    className='w-full h-[200px] object-cover'
                />
                <div className='absolute right-2 bottom-[-12px]'>
                    <button 
                        onClick={clickHandler}
                        className='bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center hover:scale-110 transition-all duration-300'
                    >
                        {!likedCourses.includes(props.course.id) ? 
                            <FcLikePlaceholder fontSize="1.75rem" /> : 
                            <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6 mb-2'>
                    {props.course.title}
                </p>
                <p className='text-gray-300'>
                    {props.course.description.length > 100 
                        ? (props.course.description.substring(0, 100) + "...") 
                        : (props.course.description)
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;