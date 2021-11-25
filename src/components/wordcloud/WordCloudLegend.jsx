function WordCloudLegend(props) {
  return (
    <svg
      width={218}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#B41717" d="M25 0h25v25H25z" />
      <path d="M0 5a5 5 0 015-5h20v25H5a5 5 0 01-5-5V5z" fill="#6D0909" />
      <path fill="#D15151" d="M50 0h25v25H50z" />
      <path d="M75 0h20a5 5 0 015 5v15a5 5 0 01-5 5H75V0z" fill="#E27C7C" />
      <path
        d="M124.188 18h-1.409l-5.045-7.813a3.296 3.296 0 01-.314-.616h-.041c.036.21.055.659.055 1.347V18h-1.149V8.197h1.49l4.909 7.69c.205.32.337.538.396.657h.027c-.045-.283-.068-.763-.068-1.442V8.197h1.149V18zm5.345.164c-1.034 0-1.861-.326-2.481-.978-.615-.656-.923-1.524-.923-2.604 0-1.176.321-2.094.964-2.755.642-.66 1.511-.991 2.604-.991 1.044 0 1.857.321 2.441.964.588.642.882 1.533.882 2.673 0 1.116-.317 2.012-.951 2.686-.629.67-1.474 1.005-2.536 1.005zm.082-6.385c-.72 0-1.289.246-1.709.739-.419.487-.629 1.162-.629 2.023 0 .83.212 1.483.636 1.962.424.478.991.718 1.702.718.725 0 1.281-.235 1.668-.704.392-.47.588-1.137.588-2.003 0-.875-.196-1.55-.588-2.024-.387-.474-.943-.71-1.668-.71zm5.585 6.371a.739.739 0 01-.54-.225.748.748 0 01-.219-.54c0-.21.073-.39.219-.54a.728.728 0 01.54-.233c.214 0 .397.078.547.233.15.15.226.33.226.54 0 .21-.076.39-.226.54a.745.745 0 01-.547.225zm9.413.014c-1.034 0-1.861-.326-2.481-.978-.615-.656-.923-1.524-.923-2.604 0-1.176.321-2.094.964-2.755.642-.66 1.511-.991 2.604-.991 1.044 0 1.857.321 2.441.964.588.642.882 1.533.882 2.673 0 1.116-.317 2.012-.951 2.686-.628.67-1.474 1.005-2.536 1.005zm.082-6.385c-.72 0-1.289.246-1.709.739-.419.487-.629 1.162-.629 2.023 0 .83.212 1.483.636 1.962.424.478.991.718 1.702.718.725 0 1.281-.235 1.668-.704.392-.47.588-1.137.588-2.003 0-.875-.196-1.55-.588-2.024-.387-.474-.943-.71-1.668-.71zm8.655-3.158a1.497 1.497 0 00-.746-.184c-.783 0-1.175.494-1.175 1.483V11h1.64v.957h-1.64V18h-1.115v-6.043h-1.196V11h1.196V9.865c0-.733.212-1.312.636-1.736.424-.428.953-.643 1.586-.643.342 0 .613.041.814.123v1.012zm4.347 9.126v-1.203a3.319 3.319 0 002.017.677c.984 0 1.476-.328 1.476-.985a.825.825 0 00-.129-.471 1.181 1.181 0 00-.342-.349c-.142-.1-.31-.19-.506-.267a20.245 20.245 0 00-.622-.252 8.85 8.85 0 01-.82-.37 2.68 2.68 0 01-.588-.423 1.685 1.685 0 01-.356-.54 1.959 1.959 0 01-.116-.705c0-.328.075-.617.226-.868.15-.255.35-.467.601-.636a2.77 2.77 0 01.855-.39c.323-.086.656-.13.998-.13.606 0 1.148.106 1.627.315v1.135c-.515-.337-1.108-.506-1.778-.506-.209 0-.399.025-.567.075a1.377 1.377 0 00-.438.199.97.97 0 00-.28.314.82.82 0 00-.096.397c0 .182.032.335.096.458.068.123.166.232.294.328.128.095.283.182.465.26.182.077.39.161.622.252.31.119.588.242.834.37.246.123.456.264.629.423.173.155.305.335.396.54.096.206.144.45.144.732 0 .346-.078.647-.233.902-.15.256-.353.467-.608.636a2.795 2.795 0 01-.882.376 4.35 4.35 0 01-1.046.123c-.72 0-1.344-.139-1.873-.417zm12.182.253h-1.121v-4.033c0-1.459-.543-2.188-1.627-2.188-.547 0-1.007.212-1.381.636-.374.42-.561.96-.561 1.62V18h-1.121V7.637h1.121v4.525h.028c.538-.884 1.303-1.326 2.297-1.326 1.576 0 2.365.95 2.365 2.85V18zm5.045.164c-1.035 0-1.862-.326-2.482-.978-.615-.656-.922-1.524-.922-2.604 0-1.176.321-2.094.963-2.755.643-.66 1.511-.991 2.605-.991 1.044 0 1.857.321 2.44.964.588.642.882 1.533.882 2.673 0 1.116-.317 2.012-.95 2.686-.629.67-1.474 1.005-2.536 1.005zm.082-6.385c-.72 0-1.29.246-1.709.739-.419.487-.629 1.162-.629 2.023 0 .83.212 1.483.636 1.962.424.478.991.718 1.702.718.724 0 1.28-.235 1.668-.704.392-.47.588-1.137.588-2.003 0-.875-.196-1.55-.588-2.024-.388-.474-.944-.71-1.668-.71zm8.121 6.385c-1.035 0-1.862-.326-2.481-.978-.616-.656-.923-1.524-.923-2.604 0-1.176.321-2.094.964-2.755.642-.66 1.51-.991 2.604-.991 1.044 0 1.857.321 2.44.964.588.642.882 1.533.882 2.673 0 1.116-.316 2.012-.95 2.686-.629.67-1.474 1.005-2.536 1.005zm.082-6.385c-.72 0-1.29.246-1.709.739-.419.487-.629 1.162-.629 2.023 0 .83.212 1.483.636 1.962.424.478.991.718 1.702.718.725 0 1.281-.235 1.668-.704.392-.47.588-1.137.588-2.003 0-.875-.196-1.55-.588-2.024-.387-.474-.943-.71-1.668-.71zm8.442 6.153c-.264.146-.613.218-1.046.218-1.225 0-1.838-.683-1.838-2.05v-4.143h-1.204V11h1.204V9.291l1.121-.362V11h1.763v.957h-1.763v3.944c0 .47.079.805.239 1.005.159.2.424.301.793.301.282 0 .526-.077.731-.232v.957zm2.072-8.71a.71.71 0 01-.725-.724c0-.21.071-.383.212-.52a.698.698 0 01.513-.211c.205 0 .378.07.519.212.146.136.219.31.219.519 0 .2-.073.371-.219.513a.705.705 0 01-.519.212zM194.27 18h-1.122v-7h1.122v7zm8.08 0h-1.121v-3.992c0-1.486-.543-2.229-1.627-2.229-.561 0-1.026.212-1.395.636-.365.42-.547.95-.547 1.593V18h-1.121v-7h1.121v1.162h.028c.528-.884 1.294-1.326 2.296-1.326.766 0 1.352.248 1.757.745.406.492.609 1.206.609 2.14V18zm8.093-.56c0 2.57-1.23 3.855-3.691 3.855-.866 0-1.622-.164-2.27-.492v-1.121c.789.437 1.541.656 2.256.656 1.723 0 2.584-.916 2.584-2.748v-.766h-.027c-.533.893-1.335 1.34-2.406 1.34-.871 0-1.573-.31-2.106-.93-.528-.624-.793-1.46-.793-2.508 0-1.19.285-2.136.855-2.837.574-.702 1.358-1.053 2.351-1.053.944 0 1.643.378 2.099 1.135h.027V11h1.121v6.44zm-1.121-2.605v-1.032c0-.556-.189-1.033-.567-1.429a1.846 1.846 0 00-1.401-.595c-.693 0-1.236.253-1.627.76-.392.5-.588 1.204-.588 2.111 0 .78.187 1.404.56 1.873.378.465.877.698 1.497.698.629 0 1.14-.224 1.532-.67.396-.447.594-1.019.594-1.716zm2.967 2.912v-1.203a3.319 3.319 0 002.017.677c.984 0 1.476-.328 1.476-.985a.818.818 0 00-.13-.471 1.19 1.19 0 00-.341-.349c-.142-.1-.31-.19-.506-.267a20.245 20.245 0 00-.622-.252 9 9 0 01-.821-.37 2.73 2.73 0 01-.588-.423 1.682 1.682 0 01-.355-.54 1.937 1.937 0 01-.116-.705c0-.328.075-.617.225-.868.151-.255.351-.467.602-.636.251-.173.535-.303.854-.39a3.85 3.85 0 01.998-.13c.607 0 1.149.106 1.627.315v1.135c-.515-.337-1.107-.506-1.777-.506-.21 0-.399.025-.567.075a1.377 1.377 0 00-.438.199.97.97 0 00-.28.314.82.82 0 00-.096.397c0 .182.032.335.096.458.068.123.166.232.294.328.127.095.282.182.465.26.182.077.389.161.622.252.31.119.588.242.834.37.246.123.455.264.629.423.173.155.305.335.396.54.096.206.144.45.144.732 0 .346-.078.647-.233.902-.15.256-.353.467-.608.636a2.795 2.795 0 01-.882.376 4.356 4.356 0 01-1.046.123c-.72 0-1.344-.139-1.873-.417z"
        fill="#000"
      />
    </svg>
  );
}

export default WordCloudLegend;
