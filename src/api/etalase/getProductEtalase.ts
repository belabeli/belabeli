"use server";

import network from "../main/network";

type productType = {
  merchantId: number | null;
};

type VoucherResponse = {
  data: any;
  error?: any;
};

export default async function getProductEtalase({
  merchantId,
}: productType): Promise<VoucherResponse> {
  try {
    const api = await network();
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/etalase/product/${merchantId}`
    );
    return response.data;
  } catch (error: any) {
    return {
      data: null,
      error: error.response?.data,
    };
  }
}