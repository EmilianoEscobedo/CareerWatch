export const HamburgHeader = () => {
  return (
    <svg
      fill="none"
      className="h-[1em]"
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z" fill="#232323" />
    </svg>
  );
};
export const XClose = () => {
  return (
    <svg
      fill="none"
      viewBox="0 0 14 14"
      className="h-[1em]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.225 13.825l-1.05-1.05L5.95 7 .175 1.225l1.05-1.05L7 5.95 12.775.175l1.05 1.05L8.05 7l5.775 5.775-1.05 1.05L7 8.05l-5.775 5.775z"
        fill="#232323"
      />
    </svg>
  );
};

export const Plus = ({color,h}) =>{
  return (
    <svg fill="none" style={{height:h}} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.25 14V7.75H0v-1.5h6.25V0h1.5v6.25H14v1.5H7.75V14h-1.5z"
        fill={color}
      />
    </svg>
  );
}

export const Arrow = ({ h, rotate }) => {
  return (
    <svg
      style={{ transform: `rotate(${rotate})`, height: `${h}` }}
      fill="none"
      viewBox="0 0 12 8"
      className="mt-[0.45vh]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7.375l-6-6L1.075.3 6 5.25 10.925.325 12 1.4 6 7.375z"
        fill="#6D28D9"
      />
    </svg>
  );
};
export const ThreePoints = ({ CN }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 16 4"
      className={CN}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2c0-.333.117-.617.35-.85C.583.917.867.8 1.2.8c.333 0 .617.117.85.35.233.233.35.517.35.85 0 .333-.117.617-.35.85-.233.233-.517.35-.85.35-.333 0-.617-.117-.85-.35A1.157 1.157 0 010 2zm6.8 0c0-.333.117-.617.35-.85C7.383.917 7.667.8 8 .8c.333 0 .617.117.85.35.233.233.35.517.35.85 0 .333-.117.617-.35.85-.233.233-.517.35-.85.35-.333 0-.617-.117-.85-.35A1.157 1.157 0 016.8 2zm6.8 0c0-.333.117-.617.35-.85.233-.233.517-.35.85-.35.333 0 .617.117.85.35.233.233.35.517.35.85 0 .333-.117.617-.35.85-.233.233-.517.35-.85.35-.333 0-.617-.117-.85-.35A1.157 1.157 0 0113.6 2z"
        fill="#232323"
      />
    </svg>
  );
};

export const Smile = ({ CN }) => {
  return (
    <svg
      fill="none"
      className={CN}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M136.597 23.41C105.387-7.801 54.61-7.801 23.406 23.404c-31.21 31.205-31.207 81.985.003 113.196 31.2 31.204 81.978 31.204 113.185-.006 31.207-31.205 31.205-81.982.003-113.182zm-8.733 104.456c-26.391 26.391-69.335 26.394-95.728.003-26.397-26.396-26.394-69.344 0-95.736 26.391-26.39 69.334-26.393 95.731.003 26.391 26.392 26.388 69.34-.003 95.73zm-11.677-16.228a4.522 4.522 0 01-2.356 5.948 4.522 4.522 0 01-5.95-2.356c-4.364-10.091-14.678-16.613-26.281-16.613-11.87 0-22.247 6.516-26.434 16.601a4.53 4.53 0 01-5.915 2.445 4.527 4.527 0 01-2.444-5.915C52.404 98.273 66.063 89.567 81.6 89.567c15.213 0 28.79 8.662 34.587 22.071zM50.146 58.339c0-5.165 4.189-9.355 9.355-9.355 5.163 0 9.353 4.188 9.353 9.355 0 5.169-4.19 9.356-9.353 9.356a9.355 9.355 0 01-9.355-9.356zm42.417 0c0-5.165 4.192-9.355 9.358-9.355 5.164 0 9.353 4.188 9.353 9.355 0 5.169-4.188 9.356-9.353 9.356-5.166 0-9.358-4.187-9.358-9.356z"
        fill="#232323"
      />
    </svg>
  );
};

export const QuoteLeft = () => {
  return (
    <svg
      fill="none"
      className="h-[1.5em] sm:h-[40px]"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307C12.833 8.713 19.667 4 21.301 4zM10.468 4c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258C11.138 17.878 9.399 20 6.83 20 3.589 20 2 17.453 2 14.693 2 8.713 8.833 4 10.468 4z"
        fill="#6D28D9"
      />
    </svg>
  );
};

export const Facebook = ({ h }) => {
  return (
    <svg
      fill="none"
      className={h}
      viewBox="0 0 12 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8H0v4h3v12h5V12h3.642L12 8H8V6.333C8 5.378 8.192 5 9.115 5H12V0H8.192C4.596 0 3 1.583 3 4.615V8z"
        fill="#fff"
      />
    </svg>
  );
};
export const Google = ({ h }) => {
  return (
    <svg viewBox="0 0 48 48" className={h} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id="a"
          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="b">
        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      </clipPath>
      <path clipPath="url(#b)" d="M0 37V11l17 13z" fill="#FBBC05" />
      <path
        clipPath="url(#b)"
        d="M0 11l17 13 7-6.1L48 14V0H0z"
        fill="#EA4335"
      />
      <path
        clipPath="url(#b)"
        d="M0 37l30-23 7.9 1L48 0v48H0z"
        fill="#34A853"
      />
      <path clipPath="url(#b)" d="M48 48L17 24l-4-3 35-10z" fill="#4285F4" />
    </svg>
  );
};
