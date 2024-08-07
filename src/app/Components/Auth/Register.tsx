"use client";
import { Checkbox, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen p-5">
        <div className="bg-white rounded-lg shadow w-[430px] py-8 px-10">
          <Image
            className="m-auto"
            width={160}
            height={30}
            src="/logo.svg"
            alt="logo"
          />
          <h2 className="text-center text-lg mt-6 mb-1">
            Welcome to Restaurant AI
          </h2>
          <p className="text-center text-gray text-sm mb-8">
            Login to continue
          </p>
          <hr className="border-[#DDDDDD] mb-6" />

          <Form layout="vertical">
            <Form.Item
              className="mb-4"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              className="mb-3"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <div className="flex justify-between items-center mb-4">
              <Form.Item
                name="remember"
                valuePropName="checked"
                className="mb-0"
              >
                <Checkbox className="text-gray text-sm">Remember me</Checkbox>
              </Form.Item>

              <Link href="/" className="text-primary font-medium text-sm">
                Forgot Password?
              </Link>
            </div>

            <button className="block bg-primary rounded-lg text-white w-full py-2.5 px-8">
              Continue
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
