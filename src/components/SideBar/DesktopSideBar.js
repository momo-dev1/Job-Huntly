import { Link } from 'react-router-dom'

import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
} from '@heroicons/react/outline'

const navigation = [
    { name: 'Dashboard', path: '#', icon: HomeIcon, current: true },
    { name: 'Team', path: '#', icon: UsersIcon, current: false },
    { name: 'Projects', path: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', path: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', path: '#', icon: InboxIcon, current: false },
    { name: 'Reports', path: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function DesktopSideBar({ user }) {
    return <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                        alt="Workflow"
                    />
                </div>
                <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={classNames(
                                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <Link to="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                        <div>
                            <div className='h-8 w-8 bg-blue-600 flex items-center justify-center rounded-full text-white uppercase'>{user?.username.slice(0, 1)}</div>
                        </div>
                        <div className="ml-3 flex items-center justify-between w-full">
                            <div>
                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 capitalize">{user?.username}</p>
                                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                            </div>
                            log out
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>

}

export default DesktopSideBar