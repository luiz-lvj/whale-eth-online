import { useEffect, useState } from 'react';
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
import PieChartComponent from '../../components/PieChartComponent/PieChartComponent';
import { useParams } from 'react-router-dom';
import DataDiv from '../../components/DataDiv/DataDiv';
import Footer from '../../components/Footer/Footer';
import FormSwap from '../../components/FormSwap/FormSwap';

// interface PerformanceItem {
//     date: string;
//     fundId: string;
//     value: number;
// }

// interface BenchmarkItem {
//     date: string;
//     bmId: string;
//     value: number;
// }

interface CombinedDataItem {
    date: string;
    fundId: string;
    performanceValue: number;
    bmId: string;
    benchmarkValue: number;
}

interface FundData {
    id: string | undefined;
    // DIFFERENCE FROM FUNDID PAGE
    name: string;  
    description: string;
}

export default function DashboardId({ account, signer }: 
    { account: string | null; signer: any;}) {

    const { id } = useParams<{ id: string }>();

    const [fund, setFund] = useState<FundData | null>(null);
    const [data, setData] = useState<CombinedDataItem[]>([]);

    const [tokenA, setTokenA] = useState("SUSD");
    const [tokenB, setTokenB] = useState("SUSD");



    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {            
    //         // Fetching data from the Performance database
    //         const performanceRef = ref(db, 'Performance');
    //         const performanceSnapshot = await get(performanceRef);
    //         const performanceData = performanceSnapshot.exists() ? performanceSnapshot.val() : [];

    //         // Fetching data from the Benchmark database
    //         const benchmarkRef = ref(db, 'BenchmarkValue');
    //         const benchmarkSnapshot = await get(benchmarkRef);
    //         const benchmarkData = benchmarkSnapshot.exists() ? benchmarkSnapshot.val() : [];

    //         // Fetching data from the Performance database
    //         const fundsRef = ref(db, 'Funds');
    //         const fundsSnapshot = await get(fundsRef);
    //         const fundsData = fundsSnapshot.exists() ? fundsSnapshot.val() : [];

    //         if (id) {
    //             const matchedFund = fundsData.find((fund: FundData) => fund.id === id);
    //             if (matchedFund) {
    //                 setFund(matchedFund);
    //             } else {
    //                 console.log("Fund not found");
    //             }
    //         } else {
    //             console.log("ID is undefined");
    //         }
                
    //         const combinedData: CombinedDataItem[] = [];

    //         performanceData.forEach((pItem: PerformanceItem) => {
    //             benchmarkData.forEach((bItem: BenchmarkItem) => {
    //                 if (pItem.date === bItem.date && pItem.fundId === id) { // assuming `id` is string
    //                     combinedData.push({
    //                         date: pItem.date,
    //                         fundId: pItem.fundId,
    //                         performanceValue: pItem.value,
    //                         bmId: bItem.bmId,
    //                         benchmarkValue: bItem.value,
    //                     });
    //                 }
    //             });
    //         });

    //         console.log(combinedData);

    //         setData(combinedData);

    //         } catch (error) {
    //         console.error("Error reading data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        function mockData() {            
            setData([
                { date: "10-20", fundId: "0", performanceValue: 100, bmId: "0", benchmarkValue: 90 },
                { date: "11-20", fundId: "0", performanceValue: 101, bmId: "0", benchmarkValue: 91 },
                { date: "12-20", fundId: "0", performanceValue: 104, bmId: "0", benchmarkValue: 92 },
                { date: "01-20", fundId: "0", performanceValue: 97, bmId: "0", benchmarkValue: 93 },
                { date: "02-20", fundId: "0", performanceValue: 94, bmId: "0", benchmarkValue: 94 },
                { date: "03-20", fundId: "0", performanceValue: 95, bmId: "0", benchmarkValue: 95 },
                { date: "04-20", fundId: "0", performanceValue: 97, bmId: "0", benchmarkValue: 95 },
                { date: "05-20", fundId: "0", performanceValue: 93, bmId: "0", benchmarkValue: 96 },
                { date: "06-20", fundId: "0", performanceValue: 88, bmId: "0", benchmarkValue: 96 },
                { date: "07-20", fundId: "0", performanceValue: 91, bmId: "0", benchmarkValue: 97 },
                { date: "08-20", fundId: "0", performanceValue: 92, bmId: "0", benchmarkValue: 97 },
                { date: "09-20", fundId: "0", performanceValue: 89, bmId: "0", benchmarkValue: 98 },
            ])
            setFund({id: "0", name: "Fund 1", description: "Fund 1 description"} as FundData)
        }
        
        mockData();
    }, []);

    if (!fund) {
        return (
        <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-6 text-center py-8 opacity-60">
                        <h2 className="flex justify-center items-center bg-white h-[12vh] text-4xl font-bold text-center text-secondary-color rounded-[20px]">
                        </h2>
                        <div className='flex flex-row justify-center h-[70vh] my-10 mx-6 mb-12 shadow-lg bg-white text-secondary-color rounded-[20px]'>
                        </div>
                        <div className='flex flex-row justify-center h-[70vh] my-12 mb-24'>
                            <div className='basis-1/2 mx-6 px-10 h-[70vh] shadow-lg bg-white text-secondary-color rounded-[20px]'>
                            </div>
                            <div className='basis-1/2 mx-6 px-10 h-[70vh] shadow-lg bg-white text-secondary-color rounded-[20px]'>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div> 
        )
    }

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-0 text-center py-8 lg:px-6">
                        <h2 className="flex justify-center items-center bg-white h-[12vh] mx-6 text-2xl md:text-4xl lg:text-4xl font-bold text-center text-secondary-color shadow-lg rounded-[20px]">
                        {fund.name} <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>&nbsp;(Manager Dashboard)</span>
                        </h2>
                        <div className='flex flex-col lg:flex-row justify-center lg:h-[70vh] my-10 mx-6 mb-12 shadow-lg bg-white text-secondary-color rounded-[20px]'>
                            <div className='flex-1 lg:basis-2/3 lg:mx-2 lg:px-10'>
                                <h1 className='font-bold text-2xl mt-6 mb-1 lg:text-left lg:ml-12'>Performance</h1>
                                <div className='flex justify-center lg:block lg:justify-start'>
                                    <div className='h-[2px] w-36 mb-8 lg:ml-12 bg-secondary-color'></div>
                                </div>
                                <div className='w-[90%] md:w-[100%] lg:w-[100%] h-[80%] flex items-center justify-center'>
                                    <LineChartComponent data={data} />
                                </div>
                            </div>
                            <div className='flex-1 lg:basis-1/3 mx-2 px-10 mb-8 lg:mb-0'>
                                <h1 className='font-bold text-2xl mt-6 mb-1 lg:text-left'>Swap</h1>
                                <div className='flex justify-center lg:block lg:justify-start'>
                                    <div className='h-[2px] w-16 lg:mb-8 bg-secondary-color'></div>
                                </div>
                                <div className='bg-slate-100 py-4 px-2 shadow-lg rounded-[20px] mt-8 lg:mt-0'>
                                    {/* PRECISO MUDAR AQUI */}
                                    <FormSwap   
                                        tokenA={tokenA}
                                        tokenB={tokenB}
                                        setTokenA={setTokenA}
                                        setTokenB={setTokenB}
                                        signer={signer}
                                        account={account}
                                        fundId={id}
                                    />
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center lg:h-[70vh] my-12 mb-24'>
                            <div className='lg:basis-1/2 mx-6 lg:px-10 h-[70vh] shadow-lg bg-white text-secondary-color rounded-[20px]'>
                                <h1 className='font-bold text-2xl mt-6 mb-1 mx-10 lg:mx-0 text-left'>Tokens</h1>
                                <div className='h-[2px] w-20 mb-8 mx-10 lg:mx-0 bg-secondary-color'></div>
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <PieChartComponent />
                                </div>
                            </div>
                            <div className='mt-12 lg:mt-0 lg:basis-1/2 mx-6 px-10 h-[70vh] shadow-lg bg-white text-secondary-color rounded-[20px]'>
                                <h1 className='font-bold text-2xl mt-6 mb-1 text-left'>Data</h1>
                                <div className='h-[2px] w-14 mb-8 bg-secondary-color'></div>
                                <DataDiv fund={fund}/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}