import { NextPage } from 'next'
import config from '../../config'
import { FaArrowLeft, FaClipboard } from 'react-icons/fa'
import Link from 'next/link'
import { toast } from 'react-toastify'

const Instructions: NextPage = () => {
  const repoURL = `https://raw.githubusercontent.com/FlafyDev/spotify-listen-together/${config.clientRecommendedVersion}`
  const listenTogetherURL = `${repoURL}/compiled/listenTogether.js`

  return (
    <div className="container mx-auto px-8 flex justify-center mt-12">
      <div className="bg-stone-900 p-8 rounded-xl flex flex-col items-center gap-4">
        <Link href="/" passHref>
          <a className="flex gap-2 items-center">
            <FaArrowLeft />
            <span>Back</span>
          </a>
        </Link>
        <h1 className="text-4xl font-bold">Installation</h1>
        <div>
          Please install{' '}
          <a
            href="https://spicetify.app/docs/getting-started/simple-installation"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            Spicetify
          </a>
        </div>
        <div>
          Please install{' '}
          <a
            href="https://github.com/FlafyDev/spotify-listen-together"
            className="text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            this plugin
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg">
            Click this icon and enter server address
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'images/Instruction1.png'} alt="" draggable="false" />
        </div>
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'/images/Instruction3.png'} alt="" draggable="false" />
          <span className="absolute top-[113px] left-[180px] overflow-hidden text-ellipsis text-lg">
            {typeof location !== 'undefined'
              ? location.protocol + '//' + location.host
              : ''}
          </span>
        </div>
      </div>
    </div>
    // <div className="main">
    //   <div className={styles.contentContainer}>
    //     <br />
    //     <div className={styles.header}>Install Spotify Listen Together</div>
    //     <br />
    //     <br />
    //     <div className={styles.header + ' ' + styles.left}>
    //       Automatic Windows install for Spotify Marketplace
    //     </div>
    //     <br />
    //     <div className={styles.text + ' ' + styles.left}>
    //       1. Press WIN + R<br />
    //       2. Type &quot;Powershell&quot; and press ENTER
    //       <br />
    //       3. Paste:
    //     </div>
    //     <br />
    //     <div
    //       className={spotStyles.box + ' ' + styles.code}
    //       onClick={(e) => {
    //         navigator.clipboard.writeText(windowsInstallCMD)
    //
    //         if (window.getSelection) {
    //           const selection = window.getSelection()
    //           const range = document.createRange()
    //           range.selectNodeContents(e.currentTarget)
    //           selection?.removeAllRanges()
    //           selection?.addRange(range)
    //         }
    //       }}
    //     >
    //       {windowsInstallCMD}
    //     </div>
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <div className={styles.header + ' ' + styles.left}>
    //       OR: Manual install
    //     </div>
    //     <br />
    //     <div className={styles.text + ' ' + styles.left}>
    //       1. Download and install{' '}
    //       <a href="https://spicetify.app/docs/getting-started/installation">
    //         Spicetify
    //       </a>
    //       .<br />
    //       <br />
    //       2. Download <a href={listenTogetherURL}>listenTogether.js</a>.<br />
    //       <br />
    //       3. Paste &quot;listenTogether.js&quot; in
    //       &quot;.../.spicetify/Extensions&quot; (find the folder
    //       &quot;.spicetify&quot; by typing &quot;spicetify -c&quot; in
    //       Powershell).
    //       <br />
    //       <br />
    //       4. Run &quot;spicetify config extensions listenTogether.js&quot; and
    //       &quot;spicetify backup apply&quot;.
    //       <br />
    //       <br />
    //     </div>
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <div className={styles.header + ' ' + styles.left}>
    //       After installation
    //     </div>
    //     <br />
    //     <div
    //       className={
    //         styles.text + ' ' + styles.left + ' ' + styles.instructionsContainer
    //       }
    //     >
    //       <div>
    //         {
    //           "1. Open Listen Together's menu by pressing the button on the top left."
    //         }
    //         <br />
    //         <img src="images/Instruction1.png"></img>
    //         <br />
    //         <br />
    //       </div>
    //       <div>
    //         {'2. Select "Join a server"'}
    //         <br />
    //         <img src="images/Instruction2.png"></img>
    //         <br />
    //         <br />
    //       </div>
    //       <div>
    //         {'3. Enter the URL and your name'}
    //         <br />
    //         <div className={styles.instruction2Container}>

    //         </div>
    //       </div>
    //     </div>
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //   </div>
    // </div>
  )
}

export default Instructions
