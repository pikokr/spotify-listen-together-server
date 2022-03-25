const ClientList = (props: {
  listeners?: { name: string; isHost: boolean; watchingAD: boolean }[]
}) => {
  console.log(props.listeners)
  // return (
  //   <div className={`${styles.list} ${spotStyles.box}`}>
  //     {
  //       props.listeners?.map((client, i) =>
  //         <div key={i} className={styles.text}>{client.name}
  //           {client.isHost?
  //             <span title='Host'>🕹️</span>
  //           : <></>}
  //           {client.watchingAD?
  //             <span title='Watching an AD'>💵</span>
  //           : <></>}
  //         </div>
  //       )
  //     }
  //   </div>
  // )
  return (
    <div className="w-full">
      <div className="text-3xl font-bold mb-2">Listeners</div>
      {props.listeners?.map((x, i) => (
        <div
          key={i}
          className="w-full w-full bg-stone-900 p-4 rounded-md flex gap-4"
        >
          <span className="flex-grow">{x.name}</span>
          {x.isHost && (
            <span className="ring ring-red-500 rounded-full px-2 font-bold text-red-500">
              HOST
            </span>
          )}
          {x.watchingAD && (
            <span className="ring ring-yellow-500 rounded-full px-2 font-bold text-yellow-500 flex items-center gap-4">
              <div>💵</div> <div>Watching AD</div>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ClientList
