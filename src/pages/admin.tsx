import React, { useEffect, useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

type Space = 'Dancefloor' | 'Lobby' | 'Private Room'
type Task = { task: string; space: Space[] }
type FormattedTask = { task: string; space: string; selected: boolean }

const undergroundTaskChecklist: Task[] = [
  { task: 'Vacuum floor. No more dust, chips...', space: ['Dancefloor', 'Lobby'] },
  { task: 'No cups, empty bottles', space: ['Dancefloor', 'Lobby'] },
  { task: 'Balanssi Rollup in the dancefloor', space: ['Dancefloor'] },
  { task: 'Benches back to the middle room', space: ['Dancefloor'] },
  { task: 'Windows closed', space: ['Dancefloor'] },
  { task: 'Heaters ON', space: ['Dancefloor', 'Lobby'] },
  { task: 'CD Player on top of amplifier', space: ['Dancefloor'] },
  { task: 'Lights off room', space: ['Dancefloor', 'Lobby'] },
  { task: 'No alcohol bottles', space: ['Dancefloor', 'Lobby', 'Private Room'] },
  { task: 'Toilets somewhat clean', space: ['Lobby'] },
  { task: 'Trophies back to their initial place', space: ['Lobby'] },
  { task: 'Door locked', space: ['Lobby'] },
]

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [listTask, setListTask] = useState<{ task: string; space: string; selected: boolean }[]>()
  const spaces = ['Dancefloor', 'Lobby', 'Private Room']

  useEffect(() => {
    const formatedList = spaces.flatMap((space) => {
      const tasks = undergroundTaskChecklist.filter((task) => task.space.some((s) => s === space))
      return tasks.map((task) => ({ task: task.task, space, selected: false }))
    })

    setListTask(formatedList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onTaskClick = (task: FormattedTask) => {
    if (listTask == null) return

    setListTask((prev) => {
      const newTask = { ...task, selected: !task.selected }
      const index = prev!.findIndex((t) => t.task === task.task && t.space === task.space)
      const newList = [...prev!]
      newList[index] = newTask
      return newList
    })
  }

  if (!isAuthorized)
    return (
      <section className="px-4 py-8 h-screen">
        <h3 className="mb-4">Password</h3>
        <input type="password" onChange={(e) => setIsAuthorized(e.target.value === 'holysquad')} />
      </section>
    )

  if (!listTask) return null

  return (
    <section className="px-4 py-8">
      <h4 className="mb-8 text-3xl font-bold">Underground Checklist</h4>
      {spaces.map((space) => (
        <div key={space} className="pb-8">
          <h3 className="text-3xl mb-4">{space}</h3>
          <ul>
            {listTask
              .filter((task) => task.space === space)
              .map((task, i) => {
                return <TaskRow key={i} task={task} selected={task.selected} onClick={() => onTaskClick(task)} />
              })}
          </ul>
        </div>
      ))}
      <button
        className="text-white font-medium bg-blue-400 px-2 py-1 rounded-md"
        onClick={() => setListTask((prev) => prev?.map((p) => ({ ...p, selected: false })))}
      >
        RESET
      </button>
    </section>
  )
}

const TaskRow = ({ task, selected, onClick }: { task: FormattedTask; selected: boolean; onClick: () => void }) => {
  return (
    <li className="flex flex-row items-center mb-4" onClick={onClick}>
      {selected ? <MdCheckBox size={24} color="#15db00" /> : <MdCheckBoxOutlineBlank size={24} />}
      <p className="pl-2">{task.task}</p>
    </li>
  )
}

export default Admin
