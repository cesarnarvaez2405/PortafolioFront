import React from "react";

export const Dashboard = () => {
  return (
    <>
      <div class="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
        <div class="w-64 px-4">
          <div class="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul class="space-y-2">
              <li>
                <a class="bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                    <span>Inbox</span>
                  </span>
                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                  <span>Starred</span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Snoozed</span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    ></path>
                  </svg>
                  <span>Important</span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                  <span>Sent</span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    <span>Drafts</span>
                  </span>
                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    1
                  </span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                  <span>Spam</span>
                </a>
              </li>
              <li>
                <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                  <span>Trash</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 px-2">
          <div class="mt-6">
            <h4 class="text-lg text-gray-800 font-bold pb-2 mb-4 border-b-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex flex-col ml-2">
                  <span class="text-sm font-semibold">Betty Garmon</span>
                  <span class="text-xs text-gray-400">
                    From: bettygarmon@example.com
                  </span>
                </div>
              </div>
              <span class="text-sm text-gray-500">Jan 30, 2022, 10:23 AM</span>
            </div>
            <div class="py-6 pl-2 text-gray-700">
              <p>Hi John!</p>
              <p class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p class="mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p class="mt-4">
                Sed ut perspiciatis unde omnis iste natus error sit:
              </p>
              <ul class="ml-12 list-disc">
                <li>voluptatem accusantium</li>
                <li>doloremque laudantium</li>
                <li>totam rem aperiam</li>
                <li>eaque ipsa quae ab illo inventore veritatis</li>
                <li>quasi architecto</li>
              </ul>
              <p class="mt-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur.
              </p>
              <p class="mt-4">Regards,</p>
              <p>Betty Garmon</p>
            </div>
            <div class="border-t-2 flex space-x-4 py-4">
              <div class="w-70 flex items-center py-2.5 px-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
                <div class="flex items-center">
                  <div class="w-10 flex items-center justify-center"></div>
                  <div class="w-48 ml-2 flex flex-col">
                    <a
                      href="#"
                      class="text-sm text-gray-700 font-bold truncate"
                    >
                      Terms and Conditions.pdf
                    </a>
                    <span class="text-gray-500 text-xs">1.5 MB</span>
                  </div>
                </div>
                <button
                  class="w-6 flex items-center justify-center"
                  title="Download"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-500 hover:text-gray-600 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="w-70 flex items-center py-2.5 px-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
                <div class="flex items-center">
                  <div class="w-10 flex items-center justify-center"></div>
                  <div class="w-48 ml-2 flex flex-col">
                    <a
                      href="#"
                      class="text-sm text-gray-700 font-bold truncate"
                    >
                      Contract Proposal.docx
                    </a>
                    <span class="text-gray-500 text-xs">3.1 MB</span>
                  </div>
                </div>
                <button
                  class="w-6 flex items-center justify-center"
                  title="Download"
                ></button>
              </div>
            </div>
            <div class="mt-8 flex items-center space-x-4">
              <button class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200">
                <span>Reply</span>
              </button>
              <button class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200">
                <span>Forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
