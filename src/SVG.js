import React from 'react';

const getPath = (name, props) => {
  switch (name) {
    case 'clear-day':
      return (<path {...props}
        d='m373.767 280.522c-4.252-1.182-8.666 1.307-9.851 5.563-13.416 48.23-57.793 81.915-107.916 81.915-61.757 0-112-50.243-112-112s50.243-112 112-112c50.314 0 94.736 33.847 108.024 82.309 1.167 4.26 5.564 6.765 9.83 5.6 4.261-1.169 6.768-5.57 5.6-9.831-15.187-55.392-65.954-94.078-123.454-94.078-70.579 0-128 57.42-128 128s57.421 128 128 128c57.281 0 107.996-38.5 123.33-93.626 1.185-4.257-1.307-8.668-5.563-9.852z m256 80c4.418 0 8-3.581 8-8v-64c0-4.418-3.582-8-8-8s-8 3.582-8 8v64c0 4.419 3.582 8 8 8z m256 432c-4.418 0-8 3.582-8 8v64c0 4.418 3.582 8 8 8s8-3.582 8-8v-64c0-4.418-3.582-8-8-8z m504 248h-64.001c-4.418 0-8 3.581-8 8 0 4.418 3.582 8 8 8h64.001c4.418 0 8-3.582 8-8 0-4.419-3.582-8-8-8z m79.999 256c0-4.419-3.582-8-8-8h-63.999c-4.418 0-8 3.581-8 8 0 4.418 3.582 8 8 8h63.999c4.418 0 8-3.582 8-8z m122.342 133.657c3.125 3.125 8.189 3.124 11.314 0 3.124-3.124 3.124-8.189 0-11.313l-56-56c-3.125-3.124-8.189-3.124-11.314 0-3.124 3.124-3.124 8.189 0 11.313z m383.999 136c2.048 0 4.095-.781 5.657-2.343l56-56c3.124-3.124 3.124-8.189 0-11.313-3.125-3.124-8.189-3.124-11.314 0l-56 56c-5.056 5.055-1.405 13.656 5.657 13.656z m389.656 378.343c-3.125-3.124-8.189-3.124-11.314 0-3.124 3.124-3.124 8.189 0 11.313l56 56c1.563 1.562 3.609 2.343 5.657 2.343 7.061 0 10.714-8.6 5.657-13.657z m122.342 378.343-56 56c-3.124 3.124-3.124 8.189 0 11.313 3.125 3.125 8.189 3.124 11.314 0l56-56c3.124-3.124 3.124-8.189 0-11.313-3.125-3.124-8.189-3.124-11.314 0z m381.648 250.34c-3.086-3.108-8.188-3.121-11.31 0-3.114 3.114-3.117 8.203 0 11.32 3.128 3.128 8.229 3.103 11.31 0 3.129-3.128 3.13-8.19 0-11.32z m255.999 96c-88.225 0-160 71.776-160 160s71.775 160 160 160 160-71.776 160-160-71.775-160-160-160zm0 304c-79.402 0-144-64.598-144-144s64.598-144 144-144 144 64.598 144 144-64.598 144-144 144z' />);
    case ' clear-night':
      return (<path {...props} 
        d='m504.058 199.99c-3.911 0-7.167 2.807-7.862 6.517-20.257 91.913-123.668 157.679-221.125 117.46-4.084-1.687-8.762.258-10.447 4.343-1.685 4.084.26 8.761 4.344 10.447 87.651 36.17 184.754-4.964 227.091-85.81 0 140.926-111.37 243.053-240 243.053-132.643 0-240-107.337-240-240 0-131.778 105.691-237.786 235.876-239.965-102.292 55.569-127.095 206.855-33.414 290.965 3.288 2.952 8.346 2.678 11.298-.608 2.951-3.288 2.679-8.346-.608-11.297-97.612-87.639-52.252-252.642 68.335-279.23 3.713-.693 6.522-3.95 6.522-7.864 0-4.418-3.582-8-8-8h-40.011c-68.381-.001-132.668 26.627-181.02 74.978-100.042 100.041-100.057 261.985 0 362.041 100.042 100.042 261.984 100.057 362.041 0 48.352-48.351 74.98-112.638 74.98-181.02v-48.01c0-4.418-3.582-8-8-8z m360.026 112c.177.002 12.593.199 24.573 7.242 15.565 9.151 23.458 25.555 23.458 48.758 0 4.419 3.582 8 8 8s8-3.581 8-8c0-23.203 7.893-39.607 23.458-48.758 12.006-7.058 24.45-7.241 24.542-7.242 4.415 0 8-3.579 8-8 0-4.408-3.564-7.983-7.969-8-.177-.002-12.593-.199-24.573-7.242-15.565-9.151-23.457-25.555-23.457-48.758 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 23.203-7.893 39.607-23.458 48.758-12.006 7.058-24.45 7.241-24.542 7.242-4.634.05-8 3.745-8 8 0 4.408 3.564 7.983 7.968 8zm56.032-34.376c5.866 11.642 14.822 20.515 25.951 26.376-11.129 5.861-20.085 14.733-25.951 26.376-5.866-11.642-14.822-20.515-25.951-26.376 11.128-5.861 20.085-14.733 25.951-26.376z m296.058 152c0 23.203-7.893 39.607-23.458 48.758-12.006 7.058-24.45 7.241-24.542 7.242-4.634.05-8 3.745-8 8 0 4.408 3.564 7.983 7.969 8 .177.002 12.593.199 24.573 7.242 15.565 9.151 23.458 25.555 23.458 48.758 0 4.418 3.582 8 8 8s8-3.582 8-8c0-23.203 7.893-39.607 23.458-48.758 6.717-3.949 15.195-6.706 24.658-7.243 4.364-.062 7.884-3.62 7.884-7.999 0-4.408-3.564-7.983-7.969-8-.177-.002-12.593-.199-24.573-7.242-15.565-9.151-23.458-25.555-23.458-48.758 0-4.419-3.582-8-8-8s-8 3.581-8 8zm33.951 64c-11.129 5.861-20.085 14.733-25.951 26.376-5.866-11.642-14.822-20.515-25.951-26.376 11.129-5.861 20.085-14.733 25.951-26.376 5.865 11.642 14.822 20.515 25.951 26.376z m242.397 314.34c-3.114 3.114-3.117 8.203 0 11.32 3.113 3.113 8.201 3.119 11.32 0 3.113-3.115 3.115-8.203 0-11.32-3.113-3.114-8.203-3.117-11.32 0z'/>);
    case 'cloudy-day':
      return (<path {...props}
        d='m443.602 252.838c-25.196-86.926-138.057-109.482-194.836-39.078-6.722-1.433-13.209-1.932-19.768-1.689-3.59-14.029-10.297-26.969-19.701-38.055l28.361-28.36c3.125-3.124 3.125-8.189 0-11.313-3.124-3.124-8.189-3.124-11.313 0l-28.359 28.357c-15.281-12.971-34.006-20.729-53.986-22.367v-32.333c0-4.419-3.581-8-8-8s-8 3.581-8 8v32.333c-19.981 1.638-38.707 9.397-53.986 22.367l-28.357-28.357c-3.124-3.124-8.189-3.124-11.313 0-3.125 3.124-3.125 8.189 0 11.313l28.356 28.358c-12.971 15.28-20.729 34.006-22.367 53.986h-32.333c-4.418 0-8 3.581-8 8s3.582 8 8 8h32.333c1.638 19.982 9.396 38.708 22.367 53.986l-28.357 28.357c-3.125 3.124-3.125 8.189 0 11.313 3.124 3.124 8.189 3.124 11.313 0l28.365-28.365c7.846 6.638 16.716 11.991 26.219 15.811-16.034 41.708 14.888 86.898 59.76 86.898h88c4.419 0 8-3.582 8-8s-3.581-8-8-8h-88c-26.467 0-48-21.533-48-48s21.533-48 48-48c4.419 0 8-3.582 8-8 0-35.29 28.71-64 64-64 35.786 0 64 29.266 64 64 0 4.418 3.582 8 8 8s8-3.582 8-8c0-31.505-18.765-59.95-46.817-72.79 52.83-57.606 147.007-31.003 164.288 42.804.798 3.41 3.721 5.904 7.214 6.156 33.26 2.397 59.315 30.435 59.315 63.83 0 35.29-28.71 64-64 64h-136c-4.418 0-8 3.582-8 8s3.582 8 8 8h136c44.112 0 80-35.888 80-80 0-39.794-29.603-73.503-68.398-79.162zm-291.249 31.616c-18.303 2.189-34.246 12.143-44.461 26.453-53.943-20.263-69.902-90.047-28.453-131.472 43.546-43.571 117.258-23.281 133.571 34.845-32.607 7.968-57.443 35.974-60.657 70.174z'/>);
    case 'cloudy-night':
      return (
        <path
          {...props}
          d='m443.637 252.855c-25.196-86.926-138.057-109.482-194.836-39.078-18.043-3.848-37.109-1.421-53.879 7.401 5.928-14.712 20.371-25.161 37.113-25.161 4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8-22.056 0-40-17.944-40-40 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 22.056-17.944 40-40 40-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8 21.631 0 39.429 17.427 39.969 38.971-10.447 10.267-18.101 23.365-21.688 38.046-54.738-15.31-77.633-82.299-39.099-128.676 12.192-14.674 28.69-24.798 46.453-28.509 4.014-.838 6.743-4.575 6.322-8.653-.422-4.078-3.858-7.178-7.958-7.178h-24c-114.113 0-176.619 132.321-106.547 220.53 17.697 22.277 42.194 38.589 69.381 46.311 8.063 26.122 32.432 45.159 61.166 45.159h88c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8h-88c-26.468 0-48-21.533-48-48s21.532-48 48-48c4.418 0 8-3.581 8-8 0-35.29 28.71-64 64-64 35.786 0 64 29.266 64 64 0 4.419 3.582 8 8 8s8-3.581 8-8c0-31.505-18.765-59.95-46.817-72.79 52.765-57.536 146.992-31.064 164.288 42.804.798 3.41 3.721 5.904 7.214 6.156 33.261 2.398 59.315 30.436 59.315 63.831 0 35.29-28.71 64-64 64h-136c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8h136c44.112 0 80-35.888 80-80 .001-39.796-29.603-73.504-68.397-79.164zm-278.818-64.816c7.863-4.731 14.479-11.342 19.216-19.202 4.738 7.861 11.352 14.471 19.218 19.203-7.857 4.745-14.475 11.365-19.216 19.229-4.741-7.865-11.358-14.485-19.218-19.23zm-68.755 161.145c-47.653-16.722-80.029-61.699-80.029-113.167 0-61.104 45.906-111.687 105.041-119.072-64.729 47.462-49.383 143.471 22.133 169.325-27.298 7.447-47.673 32.665-47.145 62.914z m272.035 396.017c-4.417 0-8 3.577-8 8 0 4.415 3.575 8 8 8 4.417 0 8-3.578 8-8 0-4.417-3.577-8-8-8z'
        />
      );
    case 'cyclone':
      return (<path {...props} 
        d='m256 352c52.935 0 96-43.065 96-96s-43.065-96-96-96-96 43.065-96 96 43.065 96 96 96zm0-175.999c44.112 0 80 35.888 80 80s-35.888 80-80 80-80-35.888-80-80 35.888-80 80-80z m368 256c0 61.757-50.243 112-112 112-4.419 0-8 3.582-8 8s3.581 8 8 8c70.58 0 128-57.42 128-128 0-4.418-3.582-8-8-8-4.419.001-8 3.582-8 8z m128 256c0 4.418 3.581 8 8 8s8-3.582 8-8c0-61.757 50.243-112 112-112 4.418 0 8-3.582 8-8 0-4.419-3.582-8-8-8-70.58.001-128 57.421-128 128z m504 80h-248c-97.047 0-176 78.953-176 176v88c0 39.701-32.299 72-72 72-4.418 0-8 3.582-8 8s3.582 8 8 8h248c97.047 0 176-78.953 176-176v-88c0-39.701 32.299-72 72-72 4.418 0 8-3.581 8-8s-3.582-8-8-8zm-88 88v88c0 88.224-71.776 160-160 160h-197.455c22.638-15.939 37.455-42.271 37.455-72v-88c0-88.224 71.776-160 160-160h197.455c-22.638 15.939-37.455 42.271-37.455 72z m300.943 153.38c25.955 11.385 46.48 31.963 57.795 57.945 1.311 3.011 4.251 4.808 7.338 4.808 5.718 0 9.641-5.891 7.33-11.196-12.928-29.688-36.38-53.202-66.037-66.21-4.046-1.776-8.765.067-10.54 4.113-1.774 4.046.067 8.765 4.114 10.54z m211.332 358.74c-26.049-11.342-46.657-31.927-58.026-57.965-1.768-4.049-6.485-5.899-10.533-4.13-4.049 1.768-5.898 6.484-4.13 10.533 12.991 29.75 36.538 53.272 66.302 66.231 4.067 1.77 8.772-.106 10.529-4.141 1.763-4.05-.091-8.764-4.142-10.528z'/>);
    case 'hail':
      return (<path {...props} 
        d='m64 239.984h32c0 35.29 28.71 64 64 64h88c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8h-88c-26.468 0-48-21.533-48-48s21.532-48 48-48c4.418 0 8-3.581 8-8 0-35.29 28.71-64 64-64 35.786 0 64 29.266 64 64 0 4.419 3.582 8 8 8s8-3.581 8-8c0-31.505-18.765-59.95-46.817-72.79 52.113-56.828 146.735-32.161 164.288 42.804.798 3.41 3.721 5.904 7.214 6.156 33.26 2.398 59.315 30.435 59.315 63.83 0 35.29-28.71 64-64 64h-136c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8h136c44.112 0 80-35.888 80-80 0-39.794-29.603-73.503-68.398-79.162-13.097-45.182-53.642-78.391-102.339-80.703-35.446-75.097-136.896-86.359-188.497-22.374-47.277-10.082-91.993 23.667-96.413 70.694-31.699 3.79-56.353 30.843-56.353 63.545 0 35.29 28.71 64 64 64zm0-112c4.418 0 8-3.581 8-8 0-42.63 40.99-73.225 81.71-61.521 3.223.928 6.695-.26 8.676-2.978 40.982-56.247 126.822-51.642 161.171 9.201-29.195 3.293-56.238 18.053-74.791 41.058-47.277-10.082-91.993 23.667-96.413 70.694-26.343 3.15-47.806 22.373-54.311 47.546h-34.042c-26.468 0-48-21.533-48-48s21.532-48 48-48z m32 447.984c-17.645 0-32 14.355-32 32s14.356 32 32 32 32-14.355 32-32-14.355-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16c0 8.823-7.178 16-16 16z m141.121 321.838c-3.392-2.827-8.438-2.371-11.267 1.024l-80 96c-4.37 5.244-.553 13.122 6.142 13.122 2.292 0 4.567-.98 6.149-2.878l80-96c2.83-3.395 2.371-8.439-1.024-11.268z m320 447.984c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16c0 8.823-7.178 16-16 16z m509.121 321.838c-3.393-2.827-8.439-2.371-11.267 1.024l-80 96c-4.37 5.244-.553 13.122 6.142 13.122 2.292 0 4.567-.98 6.149-2.878l80-96c2.83-3.395 2.371-8.439-1.024-11.268z m128 447.984c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16c0 8.823-7.178 16-16 16z m416 447.984c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16c0 8.823-7.178 16-16 16z m277.66 301.644c3.116-3.117 3.115-8.203 0-11.32-3.116-3.115-8.203-3.116-11.32 0-3.111 3.111-3.117 8.203 0 11.32 3.115 3.115 8.203 3.117 11.32 0z m229.121 321.838c-3.393-2.827-8.438-2.371-11.267 1.024l-80 96c-4.37 5.244-.553 13.122 6.142 13.122 2.292 0 4.567-.98 6.149-2.878l80-96c2.83-3.395 2.371-8.439-1.024-11.268z m330.879 430.13c3.385 2.821 8.432 2.378 11.267-1.024l80-96c2.829-3.395 2.37-8.439-1.024-11.268-3.393-2.827-8.438-2.371-11.267 1.024l-80 96c-2.83 3.395-2.371 8.44 1.024 11.268z m224 447.984c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16c0 8.823-7.178 16-16 16z m234.879 430.13c3.385 2.821 8.432 2.378 11.267-1.024l80-96c2.829-3.395 2.37-8.439-1.024-11.268-3.393-2.827-8.439-2.371-11.267 1.024l-80 96c-2.83 3.395-2.371 8.44 1.024 11.268z'/>);
    case 'haze':
      return (<path {...props} 
        d='m72 400h-63.999c-4.418 0-8 3.582-8 8s3.582 8 8 8h63.999c4.418 0 8-3.582 8-8s-3.582-8-8-8z m504 400h-64c-4.418 0-8 3.582-8 8s3.582 8 8 8h64c4.418 0 8-3.582 8-8s-3.582-8-8-8z m408 400h-304c-4.418 0-8 3.582-8 8s3.582 8 8 8h304c4.418 0 8-3.582 8-8s-3.582-8-8-8z m8 320h496.001c4.418 0 8-3.582 8-8s-3.582-8-8-8h-130.428c1.071-5.266 1.796-10.607 2.152-16h64.275c4.418 0 8-3.582 8-8s-3.582-8-8-8h-64.273c-1.791-27.076-12.6-51.727-29.447-70.965l43.378-43.378c3.124-3.125 3.124-8.189 0-11.314-3.125-3.123-8.189-3.123-11.314 0l-43.378 43.378c-19.239-16.848-43.889-27.656-70.965-29.447v-16.02c24.225 1.408 47.469 9.174 67.659 22.715 3.668 2.461 8.64 1.484 11.1-2.188 2.462-3.669 1.482-8.639-2.188-11.1-22.835-15.315-49.159-24.024-76.571-25.449v-24.232c0-4.418-3.582-8-8-8s-8 3.582-8 8v24.232c-27.193 1.414-53.336 10.002-76.046 25.098-3.68 2.445-4.68 7.411-2.233 11.091 2.444 3.678 7.407 4.681 11.091 2.233 20.077-13.345 43.159-21.003 67.189-22.4v16.02c-27.076 1.791-51.726 12.6-70.965 29.447l-43.378-43.378c-3.125-3.123-8.189-3.123-11.314 0-3.124 3.125-3.124 8.189 0 11.314l43.378 43.378c-16.848 19.238-27.656 43.889-29.447 70.965h-64.276c-4.418 0-8 3.582-8 8s3.582 8 8 8h64.274c.357 5.393 1.081 10.734 2.152 16h-130.426c-4.418 0-8 3.582-8 8s3.582 8 8 8zm248-143.999c66.993 0 116.661 62.704 101.195 128h-202.39c-15.499-65.435 34.36-128 101.195-128z m40 352c-4.418 0-8 3.582-8 8s3.582 8 8 8h432c4.418 0 8-3.582 8-8s-3.582-8-8-8z m112.671 263.851c4.348.728 8.481-2.195 9.216-6.564 3.198-19.035 10.284-36.838 21.059-52.91 2.461-3.67 1.48-8.64-2.189-11.1-3.671-2.461-8.64-1.479-11.1 2.189-12.048 17.972-19.971 37.878-23.549 59.168-.732 4.359 2.206 8.485 6.563 9.217z m371.298 193.346c-3.672 2.458-4.655 7.427-2.198 11.099 10.746 16.054 17.815 33.826 21.011 52.824.739 4.39 4.899 7.294 9.217 6.561 4.358-.732 7.295-4.858 6.562-9.216-3.573-21.247-11.478-41.121-23.492-59.07-2.459-3.668-7.429-4.654-11.1-2.198z'/>);
    case 'rainy-day':
      return (<path {...props} 
        d='m443.602 144.838c-25.16-86.793-137.948-109.625-194.838-39.057-9.13-1.955-18.342-2.299-27.61-1.036-3.557-14.252-10.385-27.501-19.869-38.716l20.372-20.373c3.125-3.124 3.125-8.189 0-11.313-3.124-3.124-8.189-3.124-11.313 0l-20.365 20.365c-15.26-12.914-34.152-20.705-53.979-22.363v-24.345c0-4.418-3.581-8-8-8s-8 3.582-8 8v24.336c-20.469 1.697-39.133 9.843-53.955 22.396l-20.388-20.389c-3.124-3.124-8.189-3.124-11.313 0-3.125 3.124-3.125 8.189 0 11.313l20.388 20.388c-12.553 14.823-20.699 33.487-22.396 53.956h-24.336c-4.418 0-8 3.581-8 8s3.582 8 8 8h24.344c1.701 20.253 9.803 38.986 22.418 53.925l-20.418 20.419c-3.125 3.124-3.125 8.189 0 11.313 3.124 3.125 8.189 3.124 11.313 0l20.401-20.401c9.603 8.155 20.855 14.477 33.271 18.36-13.908 41.287 16.926 84.384 60.671 84.384h136c4.418 0 8-3.582 8-8s-3.582-8-8-8h-136c-26.467 0-48-21.533-48-48s21.533-48 48-48c4.419 0 8-3.581 8-8 0-35.29 28.71-64 64-64s64 28.71 64 64c0 4.419 3.581 8 8 8 4.418 0 8-3.581 8-8 0-32.284-19.233-60.143-46.834-72.772 52.831-57.639 147.026-31.021 164.304 42.787.798 3.41 3.722 5.904 7.214 6.156 33.262 2.396 59.316 30.434 59.316 63.829 0 35.29-28.71 64-64 64h-72c-4.419 0-8 3.582-8 8s3.581 8 8 8h72c44.112 0 80-35.888 80-80 0-39.794-29.604-73.503-68.398-79.162zm-291.249 31.616c-19.198 2.296-35.8 13.133-45.918 28.581-34.172-9.541-58.435-41.071-58.435-77.035 0-68.375 80.706-104.958 132.165-60.651 12.567 10.821 21.438 25.237 25.434 41.137-28.902 10.133-50.28 36.411-53.246 67.968z m333.66 301.66c3.115-3.115 3.117-8.203 0-11.32-3.115-3.115-8.203-3.116-11.32 0-3.114 3.114-3.117 8.203 0 11.32 3.112 3.112 8.203 3.117 11.32 0z m263.155 324.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m95.155 324.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m175.155 404.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m431.155 324.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m359.155 404.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z'/>);
    case 'rainy-night':
      return (<path {...props} 
        d='m443.602 144.838c-25.16-86.793-137.948-109.625-194.838-39.057-26.434-5.661-53.867 2.317-73.196 21.574-12.522-1.889-24.031-7.961-32.716-17.363-29.376-31.802-10.874-82.316 20.088-94.552 8.18-3.232 5.843-15.44-2.94-15.44h-32c-70.58 0-128 57.42-128 128 0 58.899 40.544 110.273 97.191 124.261 5.738 29.443 31.713 51.739 62.809 51.739h136c4.418 0 8-3.582 8-8s-3.582-8-8-8h-136c-26.467 0-48-21.533-48-48s21.533-48 48-48c4.418 0 8-3.581 8-8 0-35.29 28.71-64 64-64s64 28.71 64 64c0 4.419 3.582 8 8 8s8-3.581 8-8c0-32.284-19.233-60.143-46.834-72.772 52.831-57.639 147.026-31.021 164.304 42.787.798 3.41 3.722 5.904 7.214 6.156 33.262 2.396 59.316 30.434 59.316 63.829 0 35.29-28.71 64-64 64h-72c-4.418 0-8 3.582-8 8s3.582 8 8 8h72c44.112 0 80-35.888 80-80 0-39.794-29.603-73.503-68.398-79.162zm-291.249 31.616c-30.202 3.611-53.992 28.345-56.172 58.958-47.007-13.889-80.181-57.57-80.181-107.412 0-61.757 50.243-112 112-112h6.496c-40.383 41.932-23.937 110.105 29.895 125.29-6.57 10.361-10.831 22.324-12.038 35.164z m333.66 301.66c3.115-3.114 3.117-8.203 0-11.32-3.115-3.115-8.204-3.116-11.32 0-3.114 3.114-3.117 8.204 0 11.32 3.114 3.115 8.203 3.117 11.32 0z m263.155 324.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m95.155 324.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m175.155 404.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m431.155 324.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z m359.155 404.422c-2.941-5.883-11.366-5.891-14.311 0-34.899 69.8-32.844 64.882-32.844 67.578 0 22.056 17.944 40 40 40s40-17.944 40-40c0-2.698 2.022 2.156-32.845-67.578zm-7.155 91.578c-12.642 0-23.032-9.824-23.936-22.239l23.936-47.872 23.936 47.872c-.904 12.415-11.294 22.239-23.936 22.239z'/>);
    case 'snowflake':
      return (<path {...props} 
        d='m471.999 216.001c-19.316 0-35.477 13.764-39.194 31.999h-45.495l34.345-34.344c3.124-3.124 3.124-8.19 0-11.314-3.125-3.124-8.19-3.124-11.315 0l-45.657 45.658h-37.139c-1.541-13.865-7.035-26.547-15.326-36.905l35.096-35.095h60.685c4.418 0 8-3.581 8-8s-3.582-8-8-8h-44.685l38.645-38.646c26.265 17.413 62.041-1.341 62.041-33.355-.001-22.056-17.944-39.999-40-39.999-32.016 0-50.768 35.778-33.355 62.04l-38.646 38.646v-44.686c0-4.419-3.582-8-8-8s-8 3.581-8 8v60.686l-35.095 35.095c-10.358-8.291-23.04-13.784-36.904-15.325v-37.143l45.656-45.657c3.124-3.124 3.124-8.189 0-11.313-3.125-3.124-8.189-3.124-11.314 0l-34.342 34.343v-45.493c18.235-3.717 31.999-19.878 31.999-39.194 0-22.056-17.943-39.999-39.999-39.999s-39.999 17.943-39.999 39.999c0 19.316 13.764 35.478 31.999 39.194v45.494l-34.344-34.344c-3.125-3.124-8.189-3.124-11.314 0-3.124 3.124-3.124 8.189 0 11.313l45.658 45.659v37.142c-13.864 1.541-26.547 7.035-36.905 15.325l-35.096-35.096v-60.686c0-4.419-3.582-8-8-8s-8 3.581-8 8v44.686l-38.645-38.646c17.413-26.264-1.341-62.04-33.356-62.04-22.056 0-39.999 17.943-39.999 39.999 0 32.018 35.779 50.767 62.041 33.355l38.644 38.646h-44.685c-4.418 0-8 3.581-8 8s3.582 8 8 8h60.685l35.097 35.096c-8.291 10.358-13.784 23.04-15.325 36.904h-29.142l-45.658-45.658c-3.125-3.124-8.189-3.124-11.314 0-3.124 3.124-3.124 8.189 0 11.314l34.344 34.344h-53.493c-3.717-18.235-19.878-31.999-39.194-31.999-22.056 0-39.999 17.943-39.999 39.999s17.943 39.999 39.999 39.999c19.316 0 35.478-13.764 39.194-31.999h53.49l-34.343 34.342c-3.124 3.124-3.124 8.189 0 11.314 3.126 3.125 8.189 3.124 11.314 0l45.657-45.656h29.145c1.541 13.867 7.036 26.551 15.328 36.91l-35.093 35.09h-60.692c-4.418 0-8 3.582-8 8s3.582 8 8 8h44.691l-38.65 38.647c-26.262-17.418-62.041 1.34-62.041 33.354 0 22.056 17.943 39.999 39.999 39.999 32.016 0 50.768-35.778 33.355-62.04l38.645-38.642v44.682c0 4.418 3.582 8 8 8s8-3.582 8-8v-60.681l35.1-35.097c10.358 8.289 23.039 13.781 36.901 15.322v29.141l-45.658 45.658c-3.124 3.124-3.124 8.189 0 11.313 3.125 3.124 8.189 3.124 11.314 0l34.345-34.343v53.492c-18.235 3.717-31.999 19.878-31.999 39.194 0 22.056 17.943 39.999 39.999 39.999s39.999-17.943 39.999-39.999c0-19.316-13.764-35.477-31.999-39.194v-53.49l34.342 34.342c1.563 1.562 3.609 2.343 5.657 2.343 7.061 0 10.714-8.6 5.657-13.657l-45.656-45.655v-29.143c13.864-1.54 26.546-7.035 36.904-15.325l35.095 35.095v60.685c0 4.418 3.582 8 8 8s8-3.582 8-8v-44.685l38.646 38.645c-17.414 26.264 1.34 62.04 33.355 62.04 22.056 0 39.999-17.943 39.999-39.999 0-32.018-35.779-50.767-62.041-33.355l-38.644-38.646h44.685c4.418 0 8-3.582 8-8s-3.582-8-8-8h-60.685l-35.095-35.094c8.291-10.359 13.785-23.041 15.325-36.906h37.141l45.656 45.656c1.563 1.562 3.609 2.343 5.657 2.343 7.068 0 10.707-8.607 5.657-13.657l-34.342-34.342h45.492c3.717 18.235 19.878 31.999 39.194 31.999 22.056 0 39.999-17.943 39.999-39.999s-17.943-39.999-39.999-39.999zm-160.001 40.038c-.02 30.86-25.133 55.961-55.998 55.961-30.878 0-55.999-25.121-55.999-55.999s25.121-55.999 55.999-55.999c30.786-.001 55.998 25.014 55.998 56.037zm112.002-192.039c13.233 0 23.999 10.766 23.999 23.999s-10.766 23.999-23.999 23.999-23.999-10.766-23.999-23.999 10.766-23.999 23.999-23.999zm-191.999-24.001c0-13.233 10.766-23.999 23.999-23.999s23.999 10.766 23.999 23.999-10.766 23.999-23.999 23.999-23.999-10.766-23.999-23.999zm-168.002 48c0-13.233 10.766-23.999 23.999-23.999s23.999 10.766 23.999 23.999-10.766 23.999-23.999 23.999-23.999-10.766-23.999-23.999zm-24 192c-13.233 0-23.999-10.766-23.999-23.999s10.766-23.999 23.999-23.999 23.999 10.766 23.999 23.999-10.766 23.999-23.999 23.999zm47.999 168.001c-13.233 0-23.999-10.766-23.999-23.999s10.766-23.999 23.999-23.999 23.999 10.766 23.999 23.999-10.766 23.999-23.999 23.999zm192.001 23.999c0 13.233-10.766 23.999-23.999 23.999s-23.999-10.766-23.999-23.999 10.766-23.999 23.999-23.999 23.999 10.766 23.999 23.999zm168-47.998c0 13.233-10.766 23.999-23.999 23.999s-23.999-10.766-23.999-23.999 10.766-23.999 23.999-23.999 23.999 10.766 23.999 23.999zm24-144.002c-13.233 0-23.999-10.766-23.999-23.999s10.766-23.999 23.999-23.999 23.999 10.766 23.999 23.999-10.766 23.999-23.999 23.999z'/>);
    case 'thunderstorm':
      return (<path {...props} 
        d='m443.602 144.816c-13.097-45.182-53.642-78.392-102.339-80.703-35.444-75.099-136.896-86.358-188.497-22.375-47.285-10.083-91.993 23.673-96.413 70.694-31.699 3.791-56.353 30.843-56.353 63.546 0 35.29 28.71 64 64 64h32c0 35.29 28.71 64 64 64h82.31l-64.624 83.088c-4.081 5.247-.329 12.912 6.315 12.912h51.868l-43.221 100.849c-3.582 8.358 7.409 15.129 13.333 8.466l128-144c4.576-5.148.913-13.315-5.979-13.315h-53.395l13.715-48h143.678c44.112 0 80-35.888 80-80 0-39.794-29.603-73.503-68.398-79.162zm-379.602 79.162c-26.467 0-48-21.533-48-48s21.533-48 48-48c4.419 0 8-3.581 8-8 0-42.621 40.982-73.229 81.71-61.521 3.231.931 6.697-.261 8.676-2.978 40.982-56.247 126.821-51.642 161.171 9.201-29.195 3.294-56.238 18.053-74.791 41.058-47.285-10.083-91.993 23.673-96.413 70.694-26.343 3.15-47.806 22.373-54.312 47.546zm246.185 144-83.413 93.839 28.58-66.688c2.259-5.269-1.611-11.151-7.353-11.151h-47.643l76.607-98.495-20.656 72.297c-1.457 5.1 2.374 10.198 7.692 10.198zm121.815-80h-139.108l10.801-37.802c2.408-8.426-8.631-14.026-14.007-7.109l-34.932 44.912h-94.754c-26.467 0-48-21.533-48-48s21.533-48 48-48c4.419 0 8-3.581 8-8 0-35.29 28.71-64 64-64 35.786 0 64 29.266 64 64 0 4.419 3.582 8 8 8s8-3.581 8-8c0-31.505-18.765-59.95-46.817-72.79 52.115-56.827 146.735-32.161 164.288 42.804.798 3.41 3.721 5.904 7.214 6.156 33.26 2.396 59.315 30.434 59.315 63.829 0 35.29-28.71 64-64 64z'/>);
    case 'tornado':
      return (<path {...props} 
        d='m124.571 137.122c82.949 40.699 291.449 25.398 291.449-33.124 0-9.987-6.24-17.978-13.76-23.983 9.079-7.196 13.76-15.272 13.76-24.017 0-53.532-175.104-71.501-269.889-41.57-32.783 10.353-50.111 24.727-50.111 41.57 0 8.744 4.682 16.82 13.76 24.017-18.487 14.764-18.28 33.51-.001 48-22.238 17.761-16.453 39.427 9.02 54.041-10.201 12.902-9.383 28.61 5.832 41.942-21.489 18.83-14.32 41.559 11.938 56.353-6.836 7.364-8.549 14.429-8.549 19.648 0 18.301 19.426 30.269 36.41 37.079-8.438 13.775-5.871 31.917 17.056 45.764 3.471 2.102 7.289 4.027 11.391 5.772l55.905 118.792c2.871 6.101 11.593 6.127 14.477 0l55.904-118.792c16.251-6.912 32.857-18.891 32.857-36.615 0-4.419-3.582-8-8-8s-8 3.581-8 8c0 7.7-8.612 14.051-13.754 17.157-32.622 19.755-99.84 19.774-132.5-.005-11.802-7.129-18.623-16.368-9.487-26.707 60.303 17.161 141.923 10.077 180.24-11.47 27.666-15.545 28.493-36.036 14.952-50.622 19.784-11.146 24.549-23.269 24.549-32.352 0-4.419-3.582-8-8-8s-8 3.581-8 8c0 16.703-48.695 40-128 40s-128-23.297-128-40c0-4.612 3.7-9.714 10.498-14.613 57.784 31.072 186.044 30.041 239.492-2.559 25.285-15.443 26.445-34.587 15.231-48.77 14.991-8.601 22.779-18.774 22.779-30.058 0-4.419-3.582-8-8-8s-8 3.581-8 8c0 5.385-6.468 13.101-23.516 20.591-58.277 24.773-164.745 24.926-225.557 5.722-11.713-3.699-38.928-14.039-38.928-26.313.001-4.546 4.524-9.86 12.552-14.878zm39.358-51.178c-25.744-6.973-27.91-13.878-27.91-13.946 0-.07 2.342-7.594 31.431-14.866 48.749-12.188 128.378-12.19 177.139 0 29.088 7.272 31.431 14.796 31.431 14.866 0 .067-2.166 6.973-27.91 13.946-53.84 13.453-130.704 13.362-184.181 0zm-12.981-56.258c57.834-18.264 152.294-18.268 210.143 0 28.702 9.064 38.929 19.535 38.929 26.313 0 3.344-2.497 7.588-8.468 12.118-11.613-48.069-259.453-48.06-271.064 0-5.971-4.53-8.468-8.774-8.468-12.118 0-6.778 10.226-17.249 38.928-26.313zm236.52 59.436c8.028 5.018 12.552 10.332 12.552 14.876 0 6.777-10.227 17.249-38.928 26.313-70.988 22.418-185.957 15.853-232.449-9.055-1.876-1.196-16.623-8.715-16.623-17.257 0-4.544 4.523-9.858 12.552-14.876 59.273 29.082 197.958 31.861 262.896-.001zm-89.143 306.194-42.305 89.894-42.305-89.895c26.481 6.243 58.096 6.251 84.61.001zm61.455-107.67c3.946 3.092 8.24 7.555 8.24 12.352 0 15.538-44.119 36-112 36-46.778 0-73.955-9.846-76.2-10.353-11.61-3.71-35.8-13.556-35.8-25.647 0-4.797 4.294-9.259 8.24-12.352 55.976 21.759 151.234 21.879 207.52 0zm18.394-98.428c3.121 3.003 5.846 6.77 5.846 10.78 0 5.422-5.096 11.521-14.346 17.17-49.808 30.38-177.467 30.4-227.304.002-9.254-5.651-14.35-11.75-14.35-17.172 0-4.01 2.725-7.777 5.846-10.78 62.83 25.012 181.384 25.049 244.308 0z'/>);
    case 'windy-day':
      return (<path {...props} 
        d='m306.34 290.34c-3.113 3.113-3.117 8.203 0 11.32 3.115 3.115 8.203 3.117 11.32 0 3.121-3.122 3.109-8.209 0-11.32-3.116-3.115-8.203-3.116-11.32 0z m352 376c0-22.056-17.944-40-40-40s-40 17.944-40 40c0 4.418 3.582 8 8 8s8-3.582 8-8c0-13.233 10.767-24 24-24s24 10.767 24 24-10.767 24-24 24h-304c-4.418 0-8 3.582-8 8s3.582 8 8 8h304c22.056 0 40-17.944 40-40z m472 432h-304c-4.418 0-8 3.582-8 8s3.582 8 8 8h304c13.233 0 24 10.767 24 24s-10.767 24-24 24-24-10.767-24-24c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 22.056 17.944 40 40 40s40-17.944 40-40-17.944-40-40-40z m392 464h-288c-4.418 0-8 3.582-8 8s3.582 8 8 8h288c4.418 0 8-3.582 8-8s-3.582-8-8-8z"/><circle cx="72" cy="472" r="8 m72 368c-4.418 0-8 3.582-8 8s3.582 8 8 8h176c4.418 0 8-3.582 8-8s-3.582-8-8-8z m34.34 370.34c-3.114 3.114-3.117 8.203 0 11.32 3.113 3.113 8.201 3.119 11.32 0 3.114-3.115 3.115-8.203 0-11.32-3.116-3.115-8.203-3.116-11.32 0z m376 368c-4.418 0-8 3.582-8 8s3.582 8 8 8h64c4.418 0 8-3.582 8-8s-3.582-8-8-8z m466.34 370.34c-3.113 3.134-3.116 8.184 0 11.32 3.113 3.113 8.201 3.119 11.32 0 3.114-3.115 3.115-8.203 0-11.32-3.116-3.115-8.203-3.116-11.32 0z m48 240c-17.645 0-32 14.355-32 32s14.355 32 32 32h232c4.418 0 8-3.582 8-8s-3.582-8-8-8h-232c-8.822 0-16-7.178-16-16s7.178-16 16-16h64c4.418 0 8-3.581 8-8s-3.582-8-8-8h-16c0-26.467 21.532-48 48-48 4.418 0 8-3.581 8-8 0-35.29 28.71-64 64-64s64 28.71 64 64c0 4.419 3.582 8 8 8s8-3.581 8-8c0-32.284-19.233-60.143-46.834-72.772 37.111-40.487 101.242-42.192 140.102-1.689 1.509 1.572 3.594 2.461 5.772 2.461h68.96c8.822 0 16 7.178 16 16s-7.178 16-16 16h-104c-4.418 0-8 3.581-8 8s3.582 8 8 8c70.205 0 57.442-.067 60.685.169 33.26 2.398 59.315 30.436 59.315 63.831 0 35.29-28.71 64-64 64h-72c-4.418 0-8 3.582-8 8s3.582 8 8 8h72c44.112 0 80-35.888 80-80 0-25.952-12.592-49.316-32.112-64 17.988 0 32.112-14.541 32.112-32 0-17.645-14.355-32-32-32h-65.62c-40.585-39.847-103.206-42.243-146.867-8.562-14.459-51.31-61.39-87.438-115.513-87.438-66.168 0-120 53.832-120 120 0 45.221 25.45 86.429 65.375 106.852-.891 4.247-1.375 8.641-1.375 13.148zm-16-120c0-88.839 104.925-136.491 171.855-78.821 17.651 15.209 29.671 35.879 34.153 58.542-1.816 1.949-3.561 3.974-5.244 6.061-47.187-10.106-91.983 23.558-96.411 70.673-21.808 2.608-40.28 16.226-49.685 35.12-33.459-18.038-54.668-53.137-54.668-91.575z'/>);
    case 'windy-night':
      return (<path {...props} 
        d='m306.34 290.34c-3.114 3.114-3.117 8.203 0 11.32 3.115 3.115 8.203 3.117 11.32 0 3.115-3.115 3.117-8.203 0-11.32-3.116-3.115-8.203-3.116-11.32 0z m352 376c0-22.056-17.944-40-40-40s-40 17.944-40 40c0 4.418 3.581 8 8 8 4.418 0 8-3.582 8-8 0-13.233 10.767-24 24-24s24 10.767 24 24-10.767 24-24 24h-304c-4.418 0-8 3.582-8 8s3.582 8 8 8h304c22.056 0 40-17.944 40-40z m472 432h-304c-4.419 0-8 3.582-8 8s3.581 8 8 8h304c13.233 0 24 10.767 24 24s-10.767 24-24 24-24-10.767-24-24c0-4.418-3.582-8-8-8-4.419 0-8 3.582-8 8 0 22.056 17.944 40 40 40s40-17.944 40-40-17.944-40-40-40z m392 464h-288c-4.419 0-8 3.582-8 8s3.581 8 8 8h288c4.418 0 8-3.582 8-8s-3.582-8-8-8z"/><circle cx="72" cy="472" r="8 m72 368c-4.419 0-8 3.582-8 8s3.581 8 8 8h176c4.418 0 8-3.582 8-8s-3.582-8-8-8z m34.34 370.34c-3.114 3.116-3.116 8.203 0 11.32 3.113 3.112 8.203 3.117 11.32 0 3.115-3.114 3.117-8.203 0-11.32-3.116-3.115-8.203-3.116-11.32 0z m376 368c-4.419 0-8 3.582-8 8s3.581 8 8 8h64c4.418 0 8-3.582 8-8s-3.582-8-8-8z m466.34 370.34c-3.114 3.136-3.115 8.184 0 11.32 3.114 3.114 8.203 3.117 11.32 0 3.115-3.114 3.117-8.203 0-11.32-3.116-3.115-8.204-3.115-11.32 0z m48 240c-17.645 0-32 14.355-32 32s14.355 32 32 32h232c4.418 0 8-3.582 8-8s-3.582-8-8-8h-232c-8.822 0-16-7.178-16-16s7.178-16 16-16h72c4.418 0 8-3.581 8-8s-3.582-8-8-8h-24c0-26.448 21.334-48 48-48 4.419 0 8-3.581 8-8 0-23.243 12.619-45.763 35.577-57.349 42.697-21.261 92.423 10.354 92.423 57.349 0 4.419 3.581 8 8 8 4.418 0 8-3.581 8-8 0-31.505-18.766-59.95-46.817-72.79 37.043-40.394 101.165-42.238 140.085-1.671 1.509 1.572 3.594 2.461 5.773 2.461h68.959c8.822 0 16 7.178 16 16s-7.178 16-16 16h-104c-4.419 0-8 3.581-8 8s3.581 8 8 8c70.248 0 57.424-.068 60.685.169 33.26 2.398 59.315 30.436 59.315 63.831 0 35.29-28.71 64-64 64h-72c-4.419 0-8 3.582-8 8s3.581 8 8 8h72c44.112 0 80-35.888 80-80 0-25.952-12.592-49.316-32.112-64 17.988 0 32.112-14.541 32.112-32 0-17.645-14.355-32-32-32h-65.621c-47.569-46.705-124.427-41.289-165.602 9.764-12.641-2.698-26.022-2.319-38.581 1.243 5.428-15.677 20.371-27.007 37.804-27.007 4.418 0 8-3.581 8-8s-3.582-8-8-8c-22.056 0-40-17.944-40-40 0-4.419-3.581-8-8-8s-8 3.581-8 8c0 22.056-17.944 40-40 40-4.419 0-8 3.581-8 8s3.581 8 8 8c20.255 0 37.148 15.283 39.66 34.915-10.159 5.923-18.828 13.968-25.497 23.643-23.056-10.143-38.163-32.951-38.163-58.558 0-29.302 21.371-56.854 49.748-64.189 9.232-2.046 7.744-15.811-1.748-15.811h-24c-66.169 0-120 53.832-120 120 0 45.217 25.445 86.422 65.364 106.847-.901 4.309-1.364 8.71-1.364 13.153zm116.784-167.979c7.863-4.731 14.479-11.341 19.216-19.201 4.738 7.861 11.353 14.472 19.218 19.203-7.859 4.746-14.475 11.363-19.216 19.229-4.741-7.865-11.359-14.485-19.218-19.231zm-132.784 47.979c0-54.223 41.713-98.878 94.733-103.583-48.285 40.17-37.015 111.908 15.683 136.204-3.224 7.566-5.281 15.611-6.06 23.831-21.487 2.557-40.157 15.781-49.712 35.109-33.444-18.04-54.644-53.132-54.644-91.561z'/>);
    default:
      return <path />;
  }
};

const SVG = ({
  name = '',
  style = {},
  fill = '#000',
  viewBox = '0 0 512 512',
  width = '100%',
  className = '',
  height = '100%'
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVG;