import React from 'react';
import Layout from '../Layout';
import awal from '../images/home.jpg';
import extra from '../images/extra.jpg'
import local from '../images/local.jpg'
import couple from '../images/couple.jpg'
import menu1 from '../images/menu1.jpg'
import menu2 from '../images/menu2.jpg'
import menu3 from '../images/menu3.jpg'




export default function Home() {
  return ( 
    <Layout>
      <section className="mt-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <h1>Best Product UMKM</h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            
                            Suscipit fugiat enim quis excepturi odit, accusamus iusto
                            
                            ut eligendi perspiciatis illo, debitis quo vitae atque similique reprehenderit doloremque, aperiam explicabo ratione?
                        </p>
                        <div className="mt-3">
                            <button className="btn btn-danger rounded-4">Order now</button>
                            <button className="btn btn-secondary rounded-4">Contact us</button>
                        </div>
                    </div>
                    <div className="col-sm-6 d-none d-sm-flex">
                        <img className="w-100 rounded-4"  src={awal} alt="Home"/>
                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="w-auto">
                        <div className="border-bottom border-2 border-danger text-center">
                         <h2>Service</h2>
                    </div>
                   </div> 
                </div>
                <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
                    <div className="col-sm-6">
                        <h3 className="">Legalitas Hukum</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Incidunt alias aliquid facere modi, magnam, accusamus autem, 
                            doloribus laudantium culpa eos vel! Facere non dignissimos enim.
                        </p>
                        <button className="btn btn-danger rounded-4">Selengkapnya</button>
                    </div>
                    <div className="col-sm-6">
                        <div className="ps-sm-5">
                            <img src={extra} alt="extra" className="w-100 rounded-4"/>

                        </div>
                    </div>
                </div>
                <div className="row align-items-sm-center flex-column flex-sm-row my-5">
                    <div className="col-sm-6">
                        <div className="pe-sm-5">
                            <img src={local} alt="Penjualan" className="w-100 rounded-4"/>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="">Penjualan Produk</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Incidunt alias aliquid facere modi, magnam, accusamus autem, 
                            doloribus laudantium culpa eos vel! Facere non dignissimos enim.
                        </p>
                        <button className="btn btn-danger rounded-4">Selengkapnya</button>
                    </div>
                   
                </div>
                <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
                    <div className="col-sm-6">
                        <h3 className="">Pembuatan Website</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Incidunt alias aliquid facere modi, magnam, accusamus autem, 
                            doloribus laudantium culpa eos vel! Facere non dignissimos enim.
                        </p>
                        <button className="btn btn-danger rounded-4">Selengkapnya</button>
                    </div>
                    <div className="col-sm-6">
                        <div className="ps-sm-5">
                            <img src={couple} alt="website" className="w-100 rounded-4"/>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="w-auto">
                        <div className="border-bottom border-2 border-danger text-center">
                         <h2>Produk Terbaru</h2>
                    </div>
                   </div> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-3 d-flex flex-column align-items-center">
                        <div className="rounded-4 bg-danger d-flex justify-content-center align-items-center py-5">
                            <img src={menu1} alt="keju" className="w-75"/>
                        </div>
                        <h5 className="mt-2">Kerupuk Cheese</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo deleniti impedit placeat voluptatibus velit,
                            natus enim totam perferendis eum aspernatur.
                        </p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column align-items-center">
                        <div className="rounded-4 bg-danger d-flex justify-content-center align-items-center py-5">
                            <img src={menu2} alt="jamuan" className="w-75"/>
                        </div>
                        <h5 className="mt-2">Jamuan</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo deleniti impedit placeat voluptatibus velit,
                            natus enim totam perferendis eum aspernatur.
                        </p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column align-items-center">
                        <div className="rounded-4 bg-danger d-flex justify-content-center align-items-center py-5">
                            <img src={menu3} alt="banana" className="w-75"/>
                        </div>
                        <h5 className="mt-2">Kerupuk banana</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo deleniti impedit placeat voluptatibus velit,
                            natus enim totam perferendis eum aspernatur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="subscribe">
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="row div-subscribe rounded-4 py-3 px-sm-5 align-items-center flex-column flex-sm-row">
                    <div className="col-sm-6 text-white align-items-center mb-2">
                        <h5>Subcribe untuk promo</h5>
                        <span>
                            Lorem ipsum dolor, sit amet consectetur
                        </span>
                    </div>
                    <div className="col-sm-6 align-items-center">
                        <div className="input-group align-items-center">
                            <input type="text" className="form-control" placeholder="masukkan email" aria-label="masukkan email" aria-describedby="button-addon2"/>
                            <button className="btn btn-secondary" type="button" id="button-addon2">Discover Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  </Layout>
  );
}
