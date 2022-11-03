import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';

import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

import { IProduct } from '../interfaces';

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto ">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: NextPageContext) => {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
};