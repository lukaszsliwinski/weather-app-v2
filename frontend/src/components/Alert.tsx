import { Dispatch, SetStateAction } from 'react';

export default function Alert({
  alertVisible,
  setAlertVisible,
  query
}: {
  alertVisible: boolean;
  setAlertVisible: Dispatch<SetStateAction<boolean>>;
  query: string;
}) {
  return (
    <div
      className={`
      fixed top-2 flex w-full justify-center
      ${alertVisible ? 'z-30' : '-z-10'}
    `}
    >
      <div
        role="alert"
        className={`
          alert text-custom-white alert-dismissible fade inline-flex items-center rounded-md bg-gray-200/40 py-3 px-4 text-center text-sm shadow-lg
          ${alertVisible ? 'show' : ''}
        `}
      >
        <strong>{query} not found!</strong>
        <button
          type="button"
          onClick={() => setAlertVisible(false)}
          className="text-warning-900 hover:text-warning-900 ml-3 box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
