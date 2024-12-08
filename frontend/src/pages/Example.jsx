import React from "react";
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'
import video6 from '../assets/video6.mp4'
import video7 from '../assets/video7.mp4'
const Example = () => {
  return (
    <div>
      <div className="relative text-white bg-gray-800 py-16">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gray-700 rounded-full opacity-50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-700 rounded-full opacity-50"></div>
        <div
          className="absolute top-0 left-0 w-32 h-32 bg-gray-700 opacity-50"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        ></div>
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-gray-700 opacity-50"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        ></div>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Sample Videos</h1>
          <p className="text-xl mt-4">
            See how BgRemove Pro performs on a variety of videos
          </p>
          <div className="bg-green-200 text-gray-900 p-4 mt-8 inline-block rounded-md">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-2xl text-green-400 mr-2"></i>
              <div>
                <p className="font-bold">
                  The following videos are 100% authentic results straight from
                  BgRemove Pro.
                </p>
                <p>
                  {" "}
                  You don't have to take our word for it,{" "}
                  <a href="#" className=" underline">
                    try it yourself
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex items-center justify-center">
        <video
        src={video1}
          className="w-[80%] h-[500px] object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
      <div className="ml-24  flex items-center justify-center">
        <div className="grid grid-cols-1 ml-10 md:grid-cols-2 gap-4 p-4">
        <div className="col-md-6 my-3">
        <video
        src={video2}
          className="w-[80%] "
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        </div>
        <div className="col-md-6 my-3">
        <video
        src={video3}
          className="w-[80%]"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        </div>
        <div className="col-md-6 my-3">
        <video
        src={video4}
          className="w-[80%]"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        </div>
        <div className="col-md-6 my-3">
        <video
        src={video5}
          className="w-[80%]"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        </div>
        <div className="col-md-6 my-3">
        <video
        src={video6}
          className="w-[80%]"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        </div>
        <div className="col-md-6 my-3">
        <video
        src={video7}
          className="w-[80%]"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        </div>
        </div>
      </div>
      <div className="bg-gray-600 w-full py-10">
        <div className="text-white justify-items-center">
            <h1 className="text-4xl font-semibold">Get Updates</h1>
            <p className="text-sm text-white ">Sign up for our mailing list to receive news and updates about BgRemove products and services.
</p>
<form className="py-3 mb-">
    <input className="rounded-l py-2 px-8" type="email" placeholder="Enter Your Email" />
    <button className="bg-blue-600 rounded-r py-2 px-5" type="submit">Subscribe</button>
</form>
<p className="text-sm text-gray-400">To learn more about how Unscreen handles your personal data, check our <a className="font-semibold" href="#">Privacy Policy</a> .</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
