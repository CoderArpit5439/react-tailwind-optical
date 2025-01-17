import React from 'react'
import { CardTable } from '../../components/Cards/CardTable'
import AdminNavbar from '../../components/Navbars/AdminNavbar'
import AuthSidebar from '../../components/Sidebar/Sidebar'

const AdminDashboard = () => {

    return (
        <>


            <AuthSidebar />
            <div class="relative md:ml-64 bg-gray-100">
                <div class="relative bg-blue-600 md:pt-32 pb-32 pt-12">
                    <div class="px-4 md:px-10 mx-auto w-full">
                        <div>
                            <div class="flex flex-wrap">
                                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-wrap">
                                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 class="text-gray-400 uppercase font-bold text-xs">TRAFFIC</h5>
                                                    <span class="font-semibold text-xl text-gray-700">350,897</span>
                                                </div>
                                                <div class="relative w-auto pl-4 flex-initial">
                                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                        <i class="far fa-chart-bar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-400 mt-4">
                                                <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i>
                                                    3.48%</span>
                                                <span class="whitespace-nowrap">
                                                    Since last month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-wrap">
                                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 class="text-gray-400 uppercase font-bold text-xs">NEW USERS</h5>
                                                    <span class="font-semibold text-xl text-gray-700">2,356</span>
                                                </div>
                                                <div class="relative w-auto pl-4 flex-initial">
                                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                                        <i class="fas fa-chart-pie"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-400 mt-4">
                                                <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
                                                <span class="whitespace-nowrap">Since last week</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-wrap">
                                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 class="text-gray-400 uppercase font-bold text-xs">SALES</h5>
                                                    <span class="font-semibold text-xl text-gray-700">924</span>
                                                </div>
                                                <div class="relative w-auto pl-4 flex-initial">
                                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                                        <i class="fas fa-users"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-400 mt-4">
                                                <span class="text-orange-500 mr-2">
                                                    <i class="fas fa-arrow-down"></i> 1.10%</span>
                                                <span class="whitespace-nowrap">Since yesterday</span>
                                            </p></div></div></div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div class="flex-auto p-4"><div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-gray-400 uppercase font-bold text-xs">PERFORMANCE</h5>
                                                <span class="font-semibold text-xl text-gray-700">49,65%</span>
                                            </div><div class="relative w-auto pl-4 flex-initial">
                                                <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">

                                                    <i class="fas fa-percent"></i>
                                                </div>
                                            </div>
                                        </div>
                                            <p class="text-sm text-gray-400 mt-4">
                                                <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
                                                <span class="whitespace-nowrap">Since last month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">

                    <div className="w-full mb-12 px-4">
                        <CardTable color="light" />
                    </div>
                    <div className="w-full mb-12 px-4">
                        <CardTable color="dark" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdminDashboard