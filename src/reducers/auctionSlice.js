import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "players": [
        {
            "id": 1,
            "name": "K.L. Rahul",
            "basePrice": 2,
            "rating": 9.5,
            "role": "Wicket Keeper",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1-PI_OWrsafEzneVO0wGBZGUd2fubrSbL",
            "status": "unauctioned"
        },
        {
            "id": 2,
            "name": "Rishabh Pant",
            "basePrice": 1.5,
            "rating": 9.25,
            "role": "Wicket Keeper",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1w9MITvVR43qTK9XXm-H1GK7JP-Vg9d1u",
            "status": "unauctioned"
        },
        {
            "id": 3,
            "name": "Virat Kohli",
            "basePrice": 2,
            "rating": 9.75,
            "role": "Batsman",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1U3TlPOlSr6R5qS-otdy67_t9_1C63JSw",
            "status": "unauctioned"
        },
        {
            "id": 4,
            "name": "Shikhar Dhawan",
            "basePrice": 2,
            "rating": 9.5,
            "role": "Batsman",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1Rycn-ZPs2FXXHwAKt2L1nJmTMyS-fk1T",
            "status": "unauctioned"
        },
        {
            "id": 5,
            "name": "Faf Du Plessis",
            "basePrice": 1.5,
            "rating": 9.25,
            "role": "Batsman",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1UmOa0RDv6uwKNpcXS1sWwYQ8ikDoSbov",
            "status": "unauctioned"
        },
        {
            "id": 6,
            "name": "Hardik Pandya",
            "basePrice": 2,
            "rating": 9.5,
            "role": "All Rounder",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1SJLeHtzGpW_hrZUuY2KzOg17xPaoPBID",
            "status": "unauctioned"
        },
        {
            "id": 7,
            "name": "Pat Cummins",
            "basePrice": 2,
            "rating": 9.5,
            "role": "All Rounder",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1qDzyI6C8aeETV0ZjRVeTMzIxUY7Wf4ek",
            "status": "unauctioned"
        },
        {
            "id": 8,
            "name": "Rashid Khan",
            "basePrice": 2,
            "rating": 9.5,
            "role": "All Rounder",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/16TB-EdVkdxIloSPf8iH-MhzaP-yIjBOE",
            "status": "unauctioned"
        },
        {
            "id": 9,
            "name": "Mitchell Starc",
            "basePrice": 2,
            "rating": 9.5,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1ho64cME3sB9dKOEVKwYGsz1_FkF_HNV0",
            "status": "unauctioned"
        },
        {
            "id": 10,
            "name": "Trent Boult",
            "basePrice": 1.5,
            "rating": 9.25,
            "role": "Bowler",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1ovh1Dok3nG8VJKgCUJ0b3jAELIR7Ot8n",
            "status": "unauctioned"
        },
        {
            "id": 11,
            "name": "M.S Dhoni",
            "basePrice": 2,
            "rating": 9.75,
            "role": "Wicket Keeper",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1m0dlOwNcpcqSD-Ye1dorHCgcCvi-HrKA",
            "status": "unauctioned"
        },
        {
            "id": 12,
            "name": "Jos Buttler",
            "basePrice": 2,
            "rating": 9.5,
            "role": "Wicket Keeper",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1gX8ncrGwC1K_Jdo-FBsvvdUNU-gMZcf6",
            "status": "unauctioned"
        },
        {
            "id": 13,
            "name": "Rohit Sharma",
            "basePrice": 2,
            "rating": 9.75,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1KdiI4CzX-IlQPHVT3zzQPovOhvJ6FAfU",
            "status": "unauctioned"
        },
        {
            "id": 14,
            "name": "David Warner",
            "basePrice": 2,
            "rating": 9.5,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1wDWf4y64JOj2rmL5wjCoKuy-QeZybw2W",
            "status": "unauctioned"
        },
        {
            "id": 15,
            "name": "Suryakumar Yadav",
            "basePrice": 1.5,
            "rating": 9.25,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1CpbnE_h0lytKTf48mZaohqUQvxL37byP",
            "status": "unauctioned"
        },
        {
            "id": 16,
            "name": "Andre Russell",
            "basePrice": 2,
            "rating": 9.5,
            "role": "All Rounder",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1GtEucxofGvfwdOfeRmooRRj9DrYVSOV1",
            "status": "unauctioned"
        },
        {
            "id": 17,
            "name": "R. Jadeja",
            "basePrice": 1.5,
            "rating": 9.5,
            "role": "All Riunder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1MjjYKnreEnJGI0ilIcM99eZd6kQEuC4E",
            "status": "unauctioned"
        },
        {
            "id": 18,
            "name": "Glenn Maxwell",
            "basePrice": 2,
            "rating": 9.5,
            "role": "All Rounder",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1gWARm9D8Q693Fm5x6yfq7VlTDAWBjUBg",
            "status": "unauctioned"
        },
        {
            "id": 19,
            "name": "Jasprit Bumrah",
            "basePrice": 2,
            "rating": 9.75,
            "role": "Bowler",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/19lx_t6Yr1jIvH7QU3dfPOekY3Vum9zKp",
            "status": "unauctioned"
        },
        {
            "id": 20,
            "name": "Anrich Nortje",
            "basePrice": 1.5,
            "rating": 9.25,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/16yaXchPCrOmpXIGK17quJzbKPFWtnh4t",
            "status": "unauctioned"
        },
        {
            "id": 21,
            "name": "Sanju Samson",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Wicket Keeper",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1lKlqdPblcGPe7CCF9uWsLzCXCQJw8CtT",
            "status": "unauctioned"
        },
        {
            "id": 22,
            "name": "Ishan Kishan",
            "basePrice": 2,
            "rating": 8.75,
            "role": "Wicket Keeper",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1LEN-JzavzfsHUv9IO6jdrmkelfOuFoT3",
            "status": "unauctioned"
        },
        {
            "id": 23,
            "name": "Dinesh Kartik",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Wicket Keeper",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1Ye5uo28JQK0nNcPj64oujD9CyfKgGIzE",
            "status": "unauctioned"
        },
        {
            "id": 24,
            "name": "Wriddhiman Saha",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Wicket Keeper",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1tpSyyoOAGIuVelQ8k180JKAAD1hsMUcP",
            "status": "unauctioned"
        },
        {
            "id": 25,
            "name": "Jitesh Sharma",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Wicket Keeper",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1klDdu0AU0psaOEGfdZvsNSLdYlVhA5QX",
            "status": "unauctioned"
        },
        {
            "id": 26,
            "name": "Johnny Bairstow",
            "basePrice": 2,
            "rating": 8.5,
            "role": "Wicket Keeper",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1w7-96dlelF_pCJO8CmuRoIVjO4jm6RxV",
            "status": "unauctioned"
        },
        {
            "id": 27,
            "name": "Quinton De Kock",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Wicket Keeper",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1ufyGw__bznZ50pwRQb-fqD0h4H_7iPub",
            "status": "unauctioned"
        },
        {
            "id": 28,
            "name": "Sam Billings",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Wicket Keeper",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1jMaNyUHsyYViQTelDg9y3G7GQ0xwASPG",
            "status": "unauctioned"
        },
        {
            "id": 29,
            "name": "Nicholas Pooran",
            "basePrice": 2,
            "rating": 9,
            "role": "Wicket Keeper",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/19I7fXNm4AEfQ8Wh8L-iXDSVa0Wh2ZNzw",
            "status": "unauctioned"
        },
        {
            "id": 30,
            "name": "Alex Carey",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Wicket Keeper",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1te2lgKHNov47fXAp6UYJiLHwW0rFjSHx",
            "status": "unauctioned"
        },
        {
            "id": 31,
            "name": "Mathew Wade",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Wicket Keeper",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1C2Hey_53euCNfWqNchUspgSZQvNfh41A",
            "status": "unauctioned"
        },
        {
            "id": 32,
            "name": "Heinrich Klaasen",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Wicket Keeper",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1biAqG2URZB50Zk5vCxKY7P8oEaDbGn8I",
            "status": "unauctioned"
        },
        {
            "id": 33,
            "name": "Rahmanullah Gurbaz",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Wicket Keeper",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1m3kE3UQiLLZrSkKrPuTtUXaK8kzEtGim",
            "status": "unauctioned"
        },
        {
            "id": 34,
            "name": "Phil Salt",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Wicket Keeper",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1XtBkBB50u2yn0_DSgn1BS1OgGDO3o3sr",
            "status": "unauctioned"
        },
        {
            "id": 35,
            "name": "Mohammed Azharuddeen",
            "basePrice": 0.2,
            "rating": 7,
            "role": "Wicket Keeper",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1FRkEuwMrwR5EWNteoGUV2oPh0S-XvqdV",
            "status": "unauctioned"
        },
        {
            "id": 36,
            "name": "K.S. Bharat",
            "basePrice": 0.5,
            "rating": 8.5,
            "role": "Wicket Keeper",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1jZf0JnvQH9PrgDq4faMf6lR1yd29kk5t",
            "status": "unauctioned"
        },
        {
            "id": 37,
            "name": "Prabhsimran Singh",
            "basePrice": 0.2,
            "rating": 7.5,
            "role": "Wicket Keeper",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1K3RzYTh_gMripC-msDRg8Peumz5JS237",
            "status": "unauctioned"
        },
        {
            "id": 38,
            "name": "N Jagadeesan",
            "basePrice": 0.2,
            "rating": 7.5,
            "role": "Wicket Keeper",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/113_WVi9vf7d1s1jBw_6LsHWiLEka8d1_",
            "status": "unauctioned"
        },
        {
            "id": 39,
            "name": "Dhruv Jurel",
            "basePrice": 0.2,
            "rating": 7.75,
            "role": "Wicket Keeper",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1jBzAtZk89MD8LuPDk-NVBnbrte22KaoN",
            "status": "unauctioned"
        },
        {
            "id": 40,
            "name": "Rahul Tripathi",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Batsman",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/17AxmszIhi52Eu28eBm_UG7_DJDeTqjF9",
            "status": "unauctioned"
        },
        {
            "id": 41,
            "name": "Prithvi Shaw",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1ZjTzVnTc2Po9l1bpLdLVZRYYXbC4rxop",
            "status": "unauctioned"
        },
        {
            "id": 42,
            "name": "Manish Pandey",
            "basePrice": 1,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1Vfdmr1jIoUS4tJXcGrHWtzpE9t-8Ohxp",
            "status": "unauctioned"
        },
        {
            "id": 43,
            "name": "Shreyas Iyer",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Batsman",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1Xn1RN6NYkI-IpX73c28l-XExWcoweXZz",
            "status": "unauctioned"
        },
        {
            "id": 44,
            "name": "Yashashvi Jaiswal",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Batsman",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1KvDS1_2ypO_J00Jud0wrhy_D1qwWxKOQ",
            "status": "unauctioned"
        },
        {
            "id": 45,
            "name": "Tilak Verma",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1BuBqOFKhENRPKH1WAus4hNdJemURPBBt",
            "status": "unauctioned"
        },
        {
            "id": 46,
            "name": "Shubman Gill",
            "basePrice": 2,
            "rating": 9,
            "role": "Batsman",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1wTOBeOND_Cx5-PqbvL0G5xz0VkoxGdmL",
            "status": "unauctioned"
        },
        {
            "id": 47,
            "name": "Ajinkya Rahane",
            "basePrice": 0.75,
            "rating": 7.5,
            "role": "Batsman",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1Tj5zy4HyNB8kzQe1ItJX5NJCKCsU9RT8",
            "status": "unauctioned"
        },
        {
            "id": 48,
            "name": "Mayank Agarwal",
            "basePrice": 1,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1x-tCbcK9Y2BGT4kv6hwh9gqc4swvwz6W",
            "status": "unauctioned"
        },
        {
            "id": 49,
            "name": "Ruturaj Gaikwad",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Batsman",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1n38OYd9SnL0Ldr575gpC-fwTC8Xsc5bE",
            "status": "unauctioned"
        },
        {
            "id": 50,
            "name": "Devdutt Padikkal",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1YMkj3OrUP8fhQ8h_LjTO3S6iyL_WJKQQ",
            "status": "unauctioned"
        },
        {
            "id": 51,
            "name": "Nitish Rana",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1ADWG4Fz_P1RLEb8PbKvIAMECyFUtUrPo",
            "status": "unauctioned"
        },
        {
            "id": 52,
            "name": "Rinku Singh",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Batsman",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/17z2Ycjx6650sc3t3L2O9QL-GegEBGctH",
            "status": "unauctioned"
        },
        {
            "id": 53,
            "name": "Sai Sudharsan",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Batsman",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1j1lCXzhMIjzgrm75iDNt9Cqehx83pR2s",
            "status": "unauctioned"
        },
        {
            "id": 54,
            "name": "Kane Williamson",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Batsman",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1AK0jhO97rspHt3rE_3VvIGOMSgMxQHze",
            "status": "unauctioned"
        },
        {
            "id": 55,
            "name": "Rassie van der Dussen",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Batsman",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1aeW3LceP4x8ZhFdS6GV5oLLvXURNFOT6",
            "status": "unauctioned"
        },
        {
            "id": 56,
            "name": "Steve Smith",
            "basePrice": 1,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1vQvOWoc5ysxIBYG6JKkgZjD0wvQ_fNuI",
            "status": "unauctioned"
        },
        {
            "id": 57,
            "name": "Jason Roy",
            "basePrice": 1.5,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1g8ggIWcz4QPoxmU90TKRhmJ7c4ikzBAo",
            "status": "unauctioned"
        },
        {
            "id": 58,
            "name": "Chris Lynn",
            "basePrice": 1,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1VyezNiWlqXz29v89cXtYLRXTtK3NsCbt",
            "status": "unauctioned"
        },
        {
            "id": 59,
            "name": "David Miller",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Batsman",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/15TlBISjbnW1AKgnQnHCFPryOHvyODhc5",
            "status": "unauctioned"
        },
        {
            "id": 60,
            "name": "Finn Allen",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Batsman",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1-1YXsejegVq9irZKZrMrSOVBLqm5wqX8",
            "status": "unauctioned"
        },
        {
            "id": 61,
            "name": "Shimron Hetmyer",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Batsman",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1ppRsLINuevS-uHywqSXRyHQM9_pNUR2j",
            "status": "unauctioned"
        },
        {
            "id": 62,
            "name": "Devon Conway",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Batsman",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/16hdxS6ZG8dFAll9QNPMbIov7lJYL7pVU",
            "status": "unauctioned"
        },
        {
            "id": 63,
            "name": "Dewald Brewis",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1NdsQp0Rq1c71HDptBkf0gwsZtfTKof7v",
            "status": "unauctioned"
        },
        {
            "id": 64,
            "name": "Tim David",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1kY6T7kt9PjYtFqS45OmjZKNWFwY70a1F",
            "status": "unauctioned"
        },
        {
            "id": 65,
            "name": "Joe Root",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1ExQXBKw_ph4USZ_VZtvSFQWMzQyhlZar",
            "status": "unauctioned"
        },
        {
            "id": 66,
            "name": "Temba Bavuma",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1F_SDuvAjGoWKmIlGXGuiRxwto1TwlJys",
            "status": "unauctioned"
        },
        {
            "id": 67,
            "name": "Kyle Mayers",
            "basePrice": 1,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1KDtDR0DIRsFoLnLiYNOGvelWxESWodqV",
            "status": "unauctioned"
        },
        {
            "id": 68,
            "name": "Rilee Rossouw",
            "basePrice": 1,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1lHJyVMun4pSH36yVc86BT_xSA2nAEcPI",
            "status": "unauctioned"
        },
        {
            "id": 69,
            "name": "Glenn Phillips",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1Fjj4LveWMol37-FJGqHCw0HuIf9ZEVic",
            "status": "unauctioned"
        },
        {
            "id": 70,
            "name": "Tristan Stubbs",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1Q5FvSox6TjgRLMi_wfIgONQ1TsEJMSpk",
            "status": "unauctioned"
        },
        {
            "id": 71,
            "name": "Harry Brook",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Batsman",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1mwIAXQmauJRLp465u_O3suWOnI2asv5l",
            "status": "unauctioned"
        },
        {
            "id": 72,
            "name": "Riyan Parag",
            "basePrice": 0.5,
            "rating": 7.25,
            "role": "Batsman",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/16dE9A9ar_S5NgdzbrlPwfAeLSwa5BIPW",
            "status": "unauctioned"
        },
        {
            "id": 73,
            "name": "Rajat Patider",
            "basePrice": 0.4,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1aY6Y058essPCXnjLDHTfATmtq51_kp2g",
            "status": "unauctioned"
        },
        {
            "id": 74,
            "name": "Shahrukh Khan",
            "basePrice": 0.5,
            "rating": 8.25,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1o9u0z-wyOMmmhMjPQG8RFuy1CEqRmwp3",
            "status": "unauctioned"
        },
        {
            "id": 75,
            "name": "Priyam Garg",
            "basePrice": 0.5,
            "rating": 7.25,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1UeUAsR1ZbBibEVXwoviso5ANREsssfKl",
            "status": "unauctioned"
        },
        {
            "id": 76,
            "name": "Mandeep Singh",
            "basePrice": 0.4,
            "rating": 7,
            "role": "Batsman",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1Zyi0gZ4JTBZaI-4JyaLfdnK25TkilhMp",
            "status": "unauctioned"
        },
        {
            "id": 77,
            "name": "Ayush Badoni",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Batsman",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1Sf4YluXX9VybMjN8peEWzHC2r8xNtbuz",
            "status": "unauctioned"
        },
        {
            "id": 78,
            "name": "Safaraz Khan",
            "basePrice": 0.5,
            "rating": 7,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/14Xa-ANxMBUFx1_l3MVqZWrvfX6h_Tsp-",
            "status": "unauctioned"
        },
        {
            "id": 79,
            "name": "Ripal Patel",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Batsman",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1lrs0mPoO4fNgA2F3-BRf3eFMvJX7cjdA",
            "status": "unauctioned"
        },
        {
            "id": 80,
            "name": "Anukul Roy",
            "basePrice": 0.2,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1IwWZ-vDzhs5OKyBm-Jg9-CwmR0tVmnzJ",
            "status": "unauctioned"
        },
        {
            "id": 81,
            "name": "Nehal Wadhera",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Batsman",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1TZMQuYL8E0Qr_oJWklmiDWKY5MO7JZhE",
            "status": "unauctioned"
        },
        {
            "id": 82,
            "name": "Anuj Rawat",
            "basePrice": 0.4,
            "rating": 7.5,
            "role": "Batsman",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1HgpOsoLosYVOByeHhxUYC7TQpkKgbEgW",
            "status": "unauctioned"
        },
        {
            "id": 83,
            "name": "Mahipal Lomror",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Batsman",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/11q1uiKfcmtnwJ95vsZjSRrTE15kqMQBd",
            "status": "unauctioned"
        },
        {
            "id": 84,
            "name": "Washington sundar",
            "basePrice": 1,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1oloy-tKmjuPqSXRQ4OLmGoxC4b1jaWWg",
            "status": "unauctioned"
        },
        {
            "id": 85,
            "name": "Shivam dube",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1kGCKKnh7i2AbJKc0lCJgeD5tTMPGCtbQ",
            "status": "unauctioned"
        },
        {
            "id": 86,
            "name": "Krunal pandya",
            "basePrice": 1,
            "rating": 8,
            "role": "All Rounder",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1vlkkut71gk_a7fpPc_r7WbF6tW7m2gh4",
            "status": "unauctioned"
        },
        {
            "id": 87,
            "name": "Axar patel",
            "basePrice": 1,
            "rating": 8.75,
            "role": "All Rounder",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1P7A3JGFL806spQOKWdahXVVSBwvue05y",
            "status": "unauctioned"
        },
        {
            "id": 88,
            "name": "Venkatesh Iyer",
            "basePrice": 1,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1SAcQ3IQjuYCmn7Gy-02y8vUK2i0NoDGf",
            "status": "unauctioned"
        },
        {
            "id": 89,
            "name": "Deepak Hooda",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1w9ex-6C8kFUY4eg5FWLYrOLJAwVje-FQ",
            "status": "unauctioned"
        },
        {
            "id": 90,
            "name": "Karn Sharma",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "All Rounder",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1ZOz6KB9iL8W7VLvhCmQ8Fd6fJl8jYf0A",
            "status": "unauctioned"
        },
        {
            "id": 91,
            "name": "Kedar Jadhav",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "All Rounder",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1mrGZzqwXGejzv6JP6W6Q6AscoCFmLaUf",
            "status": "unauctioned"
        },
        {
            "id": 92,
            "name": "Vijay Shankar",
            "basePrice": 0.75,
            "rating": 8,
            "role": "All Rounder",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1vul1Mc30S7-pzXjonxr5ZdIBOiYUjFr9",
            "status": "unauctioned"
        },
        {
            "id": 93,
            "name": "Rishi Dhawan",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "All Rounder",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1h5PXawZB8RUPmqiDCTtF63jf3hSIDNDU",
            "status": "unauctioned"
        },
        {
            "id": 94,
            "name": "Deepak Chahar",
            "basePrice": 2,
            "rating": 8.75,
            "role": "All Rounder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1UW6X4B9BJ_Z5u_H7Kp9njdCN46hu-F9T",
            "status": "unauctioned"
        },
        {
            "id": 95,
            "name": "Cameron Green",
            "basePrice": 2,
            "rating": 8.75,
            "role": "All Rounder",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1z3qxscQsvurmUG2sYAYRB-yqLiyuz8gv",
            "status": "unauctioned"
        },
        {
            "id": 96,
            "name": "Ben Stokes",
            "basePrice": 2,
            "rating": 9,
            "role": "All Rounder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1PJ0863K09J7skA-lyjGGKykjfQao-KOU",
            "status": "unauctioned"
        },
        {
            "id": 97,
            "name": "Mohammad Nabi",
            "basePrice": 1.5,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1-HuPl_GIgvJHmT-7wuLuQjO8-F9Xwmfi",
            "status": "unauctioned"
        },
        {
            "id": 98,
            "name": "Jason Holder",
            "basePrice": 1,
            "rating": 8,
            "role": "All Rounder",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/15SsrkTq0ZMFA1IVgocDGUXW_SoqAOcud",
            "status": "unauctioned"
        },
        {
            "id": 99,
            "name": "Liam Livingstone",
            "basePrice": 2,
            "rating": 8.75,
            "role": "All Rounder",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1z0fVdkzarHkViofVqlEfC75-jwwsxEs3",
            "status": "unauctioned"
        },
        {
            "id": 100,
            "name": "Shakib Al Hasan",
            "basePrice": 1,
            "rating": 8,
            "role": "All Rounder",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1-xlFThIGJZGj4D3WZj_bn9yc7Ev5OsqT",
            "status": "unauctioned"
        },
        {
            "id": 101,
            "name": "Moeen Ali",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1x2Mb6hoWgyom31u7JrryLbgnhFgCiEqa",
            "status": "unauctioned"
        },
        {
            "id": 102,
            "name": "Sam Curran",
            "basePrice": 2,
            "rating": 9,
            "role": "All Rounder",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1sz3ThNNz7XHmOTizah3LO00vuc5yvlnn",
            "status": "unauctioned"
        },
        {
            "id": 103,
            "name": "Marcus Stoinis",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1fUstzEdmGkt__ImDqbjWGckQA8W7cvI-",
            "status": "unauctioned"
        },
        {
            "id": 104,
            "name": "Mitchell Marsh",
            "basePrice": 1,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1zDKY63DlGdJwmrUq7HAJRHJ2we2Q5AtA",
            "status": "unauctioned"
        },
        {
            "id": 105,
            "name": "Jimmy Neesham",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/19WqzMVFXln41lIjt0OzbxFcqHRMWIHp3",
            "status": "unauctioned"
        },
        {
            "id": 106,
            "name": "Daryl mitchell",
            "basePrice": 1,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1taSjfasSRKBIqHrsi8GCetptRJgtvGcO",
            "status": "unauctioned"
        },
        {
            "id": 107,
            "name": "Aiden Markram",
            "basePrice": 1,
            "rating": 8.75,
            "role": "All Rounder",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1PcQwFys5eCjjwWtWtke5Xyxj47763BBc",
            "status": "unauctioned"
        },
        {
            "id": 108,
            "name": "Rovman Powell",
            "basePrice": 0.75,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1WiHMZ27qqdoyfy8I1_I5t82qelqT0qdr",
            "status": "unauctioned"
        },
        {
            "id": 109,
            "name": "Sikanadar Raza",
            "basePrice": 1,
            "rating": 8.25,
            "role": "All Rounder",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1CmvaD1MRxKlif3r5nREC7K-ndYkXF24W",
            "status": "unauctioned"
        },
        {
            "id": 110,
            "name": "Rachin Ravindra",
            "basePrice": 1,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1o30kwvogP2suUq6mm7IFoH9nmt2OMSyT",
            "status": "unauctioned"
        },
        {
            "id": 111,
            "name": "Marco Jansen",
            "basePrice": 1,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1csHs9L-TviSwrWqBOHt_2qvadj4FbP0n",
            "status": "unauctioned"
        },
        {
            "id": 112,
            "name": "Wayne Parnell",
            "basePrice": 0.75,
            "rating": 8,
            "role": "All Rounder",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1ppMYDMVhoaLuJ3_gBfULw8K484pMgoTj",
            "status": "unauctioned"
        },
        {
            "id": 113,
            "name": "Mitchell Santner",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "All Rounder",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1sMr8KpCPXhHs8fPmr6A-ZoM2Zp0Kg3A8",
            "status": "unauctioned"
        },
        {
            "id": 114,
            "name": "Rahul Tewatia",
            "basePrice": 1,
            "rating": 8.75,
            "role": "All Rounder",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1SAjogUkVwvVi4OIY_v1-sVafTGDacgE5",
            "status": "unauctioned"
        },
        {
            "id": 115,
            "name": "Abdul Samad",
            "basePrice": 0.4,
            "rating": 7.5,
            "role": "All Rounder",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1xKXmBJ_7LiEp230araoIB5zH9EgyYqZ4",
            "status": "unauctioned"
        },
        {
            "id": 116,
            "name": "Abhishek Sharma",
            "basePrice": 0.2,
            "rating": 7.75,
            "role": "All Rounder",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1I1X-ZfeHLiqC9-b2OSh7nAOnoUWs6iEK",
            "status": "unauctioned"
        },
        {
            "id": 117,
            "name": "Lalit Yadav",
            "basePrice": 0.4,
            "rating": 7.5,
            "role": "All Rounder",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1tqiH2MtqP8N73QTHdYy64NaWKnjBcybi",
            "status": "unauctioned"
        },
        {
            "id": 118,
            "name": "Arjun Tendulkar",
            "basePrice": 0.2,
            "rating": 7,
            "role": "All Rounder",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1ZDeve5I0ZnrWm6ccrL4cfJKfXclWPmoi",
            "status": "unauctioned"
        },
        {
            "id": 119,
            "name": "Ramandeep Singh",
            "basePrice": 0.2,
            "rating": 7,
            "role": "All Rounder",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1hNKzm6dAJVMn2jBst0HQw32cojSCWf16",
            "status": "unauctioned"
        },
        {
            "id": 120,
            "name": "Krishnappa Gowtham",
            "basePrice": 0.2,
            "rating": 7,
            "role": "All Rounder",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1yTWHtxRX1kpxivGfve-ka41jHxRUKQkD",
            "status": "unauctioned"
        },
        {
            "id": 121,
            "name": "Harpreet Brar",
            "basePrice": 0.4,
            "rating": 7.5,
            "role": "All Rounder",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1GPT5HQw5L0nbLgI8ThqMoQyuVrgHUm-y",
            "status": "unauctioned"
        },
        {
            "id": 122,
            "name": "Mohammed Shami",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1LC_RCnucL6AULbf9A7hNBAOok1zE_Scx",
            "status": "unauctioned"
        },
        {
            "id": 123,
            "name": "Mohammed Siraj",
            "basePrice": 2,
            "rating": 9,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1767yIwissKiHGwmNVKW_pggwcOr9MRzT",
            "status": "unauctioned"
        },
        {
            "id": 124,
            "name": "Y Chahal",
            "basePrice": 2,
            "rating": 8.75,
            "role": "Bowler",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1CsDbfvyx3BXee7axqKtEbWLaxfHAzaiu",
            "status": "unauctioned"
        },
        {
            "id": 125,
            "name": "Navdeep Saini",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1coMmP_rFrK1XHw-MW-ifbEZb96saBHnl",
            "status": "unauctioned"
        },
        {
            "id": 126,
            "name": "T Natrajan",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/19AlDNasdyLlFqSImM_GiCfU_4HDIl8WV",
            "status": "unauctioned"
        },
        {
            "id": 127,
            "name": "Sandeep Sharma",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1MqCCAWYB8BFp1g3AXPpSFuU-nMFVXbz6",
            "status": "unauctioned"
        },
        {
            "id": 128,
            "name": "Bhuvneshwar kumar",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Bowler",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1nTv-XeESfPKpfF-OQS0sXWu1HHFH12UX",
            "status": "unauctioned"
        },
        {
            "id": 129,
            "name": "Prasidh Krishna",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1ZzcTdEU5LHirE3c2E6ockyHi3eOkx1CL",
            "status": "unauctioned"
        },
        {
            "id": 130,
            "name": "Kuldeep Yadav",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1gIC3LeGtRSE2u6n4TL3s6SBwQsN355Zg",
            "status": "unauctioned"
        },
        {
            "id": 131,
            "name": "Shardul Thakur",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1Pffni3qaLykmBDZC34bSiTNSP8YvnUM0",
            "status": "unauctioned"
        },
        {
            "id": 132,
            "name": "Rahul Chahar",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1th5bwZMszbYPn5Q4FOp5TMBcPYTDv7wt",
            "status": "unauctioned"
        },
        {
            "id": 133,
            "name": "Ravichandran Ashwin",
            "basePrice": 2,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1NexsUK-yq18W05evQrxLVVLCfImy7yrF",
            "status": "unauctioned"
        },
        {
            "id": 134,
            "name": "Umesh Yadav",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1m9wUXH_339qI0XXgmfvKwUULc41H8Der",
            "status": "unauctioned"
        },
        {
            "id": 135,
            "name": "Ravi Bishnoi",
            "basePrice": 2,
            "rating": 9,
            "role": "Bowler",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1lc4gMjCYHrhHQpuQFhEQFgKZR-3go80L",
            "status": "unauctioned"
        },
        {
            "id": 136,
            "name": "Harshal Patel",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1OYcjsXsTjGok7wsjY_O8Y5sTTGZCZhvx",
            "status": "unauctioned"
        },
        {
            "id": 137,
            "name": "Chetan Sakariya",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1ARuyF9nMq1vNzs24PktRqqaqkA5aIHFF",
            "status": "unauctioned"
        },
        {
            "id": 138,
            "name": "Varun Chakravarthy",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1bjxC8odX-rKvwd9SgQhjLTzRhI0epdhe",
            "status": "unauctioned"
        },
        {
            "id": 139,
            "name": "Arshdeep Singh",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1-SzqvDyzjjeujwRb65QZGkmccITv1jjX",
            "status": "unauctioned"
        },
        {
            "id": 140,
            "name": "Avesh Khan",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1N_7S2HmENUW-EvL-KgZFa8dfUY60jtsk",
            "status": "unauctioned"
        },
        {
            "id": 141,
            "name": "Khaleel Ahmed",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1il61AVESdKAIlXlc5PnwW_BX-77YvIyF",
            "status": "unauctioned"
        },
        {
            "id": 142,
            "name": "Umran Malik",
            "basePrice": 1.5,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1MjL0WCn1nALCt5eoDiTfDu_IEUTWbjhD",
            "status": "unauctioned"
        },
        {
            "id": 143,
            "name": "Mukesh Kumar",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1k2ChpMIo9jhjR9OwnDeg7taBZtzBHtBp",
            "status": "unauctioned"
        },
        {
            "id": 144,
            "name": "Mohit Sharma",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/11pTbl9R3DQnD5BizUxn5yIsBvfELqoKx",
            "status": "unauctioned"
        },
        {
            "id": 145,
            "name": "Piyush Chawla",
            "basePrice": 1,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1GPwCnw-RHdUd5IpC0Z1j83eU0XU3KAP5",
            "status": "unauctioned"
        },
        {
            "id": 146,
            "name": "Jaydev Unadkat",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1P2YmdHdFzVAt53wKQwSgAfmuS3rLVSw7",
            "status": "unauctioned"
        },
        {
            "id": 147,
            "name": "Josh Hazlewood",
            "basePrice": 2,
            "rating": 9,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/126oXqN3TYeTV8VetKKBAjkTO0NZ5EKic",
            "status": "unauctioned"
        },
        {
            "id": 148,
            "name": "Maheesh Theekshana",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1GWX_ki2ZkeDGTRZsyThnsJrlY2VVhMok",
            "status": "unauctioned"
        },
        {
            "id": 149,
            "name": "Adam Zampa",
            "basePrice": 1.5,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "RR",
            "img": "https://lh3.google.com/u/0/d/1Q67eOgZy0rv2aw5ISQgl3_8v5iro_hU0",
            "status": "unauctioned"
        },
        {
            "id": 150,
            "name": "Mustafizur Rahman",
            "basePrice": 1,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1ybtOA3MBYZfPh-Lk3AzNCT6DQTbIOjIp",
            "status": "unauctioned"
        },
        {
            "id": 151,
            "name": "Wanindu Hasaranga",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1y74ts2E2A9wwod71vTaoioHDCI_3mr-H",
            "status": "unauctioned"
        },
        {
            "id": 152,
            "name": "N coulter Nile",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1YigSxgKPnw3_tySxI59TEyjtUdQVED1k",
            "status": "unauctioned"
        },
        {
            "id": 153,
            "name": "Sunil Narine",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1zV16wPw4dGcTU1P2x535u67MYKE2OHJe",
            "status": "unauctioned"
        },
        {
            "id": 154,
            "name": "Kyle Jamieson",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1gm5N5c0yquAt1dBwQsIMwPcICzSER5Vl",
            "status": "unauctioned"
        },
        {
            "id": 155,
            "name": "Lockie Ferguson",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1VuidMl_jFAZqw6DxUWYBM4ErRQxUOHmS",
            "status": "unauctioned"
        },
        {
            "id": 156,
            "name": "Matheesha Pathirana",
            "basePrice": 1,
            "rating": 8.5,
            "role": "Bowler",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1tmGqbH2zeXM0NqcaUkM-QALDZLMW5yP9",
            "status": "unauctioned"
        },
        {
            "id": 157,
            "name": "Alzarri Joseph",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/11wgHqkm_JePQS9TIMG2FNbh9xfv7AOnT",
            "status": "unauctioned"
        },
        {
            "id": 158,
            "name": "Dushmanth Chameera",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "RCB",
            "img": "https://lh3.google.com/u/0/d/1UIp24XmLIixP0zoiOwfRRh6BRdGFoKw8",
            "status": "unauctioned"
        },
        {
            "id": 159,
            "name": "Lungi Ngidi",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "DC",
            "img": "https://lh3.google.com/u/0/d/1WkNXZNJke2cqEx3ndL3Y4T8ce7wfHvYe",
            "status": "unauctioned"
        },
        {
            "id": 160,
            "name": "Jason Behrendorff",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1yEJ03ZtR-JbT6_YvnF6ZObjSyCZzWZQI",
            "status": "unauctioned"
        },
        {
            "id": 161,
            "name": "Joshua Little",
            "basePrice": 1,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1TVOiqXLpU_b4xQiur7yxUy100K-igBgq",
            "status": "unauctioned"
        },
        {
            "id": 162,
            "name": "Naveen ul Haq",
            "basePrice": 1.5,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/12pkZ1U6aMnPbLtIiX_NUQLujCUbJtCo0",
            "status": "unauctioned"
        },
        {
            "id": 163,
            "name": "Mark Wood",
            "basePrice": 1.5,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1B2ZnwjRmGVGjrp8mULMJaISrtX83IxPE",
            "status": "unauctioned"
        },
        {
            "id": 164,
            "name": "Kagiso Rabada",
            "basePrice": 2,
            "rating": 8.75,
            "role": "Bowler",
            "previousTeam": "PBKS",
            "img": "https://lh3.google.com/u/0/d/1NFr3WXAS5W-0gqyx4oQ3TE9ADdy8XElm",
            "status": "unauctioned"
        },
        {
            "id": 165,
            "name": "Tim Southee",
            "basePrice": 1,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1ZdFAHCOY7IPHt_-gAQ0wi3bMJlVJaned",
            "status": "unauctioned"
        },
        {
            "id": 166,
            "name": "Noor Ahmad",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/171nbxU5A0_yfKF07tLSKiRPtES99BoTQ",
            "status": "unauctioned"
        },
        {
            "id": 167,
            "name": "Mohsin Khan",
            "basePrice": 0.5,
            "rating": 8.25,
            "role": "Bowler",
            "previousTeam": "LSG",
            "img": "https://lh3.google.com/u/0/d/1gF01EVQY-QxroxTt7dv79Ys_R_wxOENn",
            "status": "unauctioned"
        },
        {
            "id": 168,
            "name": "Kamlesh Nagarkoti",
            "basePrice": 0.4,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1RKFTMIIbwCHU-k47IiNHnvChkXGf_x9d",
            "status": "unauctioned"
        },
        {
            "id": 169,
            "name": "Tushar Deshpande",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "CSK",
            "img": "https://lh3.google.com/u/0/d/1BdrMnaHx8UL6WRegiEDy9B69SLjrDafE",
            "status": "unauctioned"
        },
        {
            "id": 170,
            "name": "Yash Dayal",
            "basePrice": 0.2,
            "rating": 7.5,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1pFO4TjQan2Bagsi9_hXs5v9-t1994Q4T",
            "status": "unauctioned"
        },
        {
            "id": 171,
            "name": "Shivam Mavi",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1C_6bUHCwEXSNYbOhm2Ooup7ogkWFSWu_",
            "status": "unauctioned"
        },
        {
            "id": 172,
            "name": "R Sai Kishore",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "GT",
            "img": "https://lh3.google.com/u/0/d/1giJRHythgEvwgTsXTy0Niz_fmfnPK-BD",
            "status": "unauctioned"
        },
        {
            "id": 173,
            "name": "Suyash Sharma",
            "basePrice": 0.4,
            "rating": 7.5,
            "role": "Bowler",
            "previousTeam": "KKR",
            "img": "https://lh3.google.com/u/0/d/1L5bxvDR-8tH-1l-O4WGCT_sWEt0p9Dp7",
            "status": "unauctioned"
        },
        {
            "id": 174,
            "name": "Hrithik Shokeen",
            "basePrice": 0.2,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/1gK30MeBxTmTReqm0bCfZXlZUbM-dLLJX",
            "status": "unauctioned"
        },
        {
            "id": 175,
            "name": "Akash Madhwal",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "MI",
            "img": "https://lh3.google.com/u/0/d/18k25bNuBbNJMoOAqM38IraEB75En3p9b",
            "status": "unauctioned"
        },
        {
            "id": 176,
            "name": "Kartik Tyagi",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bowler",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1cR2qPyZ0EarrSRhVdeJnccJ4KoKmStrs",
            "status": "unauctioned"
        },
        {
            "id": 177,
            "name": "Mayank Markande",
            "basePrice": 0.2,
            "rating": 8,
            "role": "Bowler",
            "previousTeam": "SRH",
            "img": "https://lh3.google.com/u/0/d/1WUTfo07a61G0U8b-GYTvj8OwhJYsTbBf",
            "status": "unauctioned"
        },
        {
            "id": 178,
            "name": "Ab DeVilliers",
            "basePrice": 2.5,
            "rating": 10,
            "role": "Wicket Keeper",
            "previousTeam": "NaN",
            "img": "https://lh3.google.com/u/0/d/1Rme59GYyrFJhvemauSk3ORJ9STgtynRJ",
            "status": "unauctioned"
        },
        {
            "id": 179,
            "name": "Sachin Tendulkar",
            "basePrice": 2.5,
            "rating": 10,
            "role": "Batman",
            "previousTeam": "NaN",
            "img": "https://lh3.google.com/u/0/d/1D1o4rF7PTUxnsPuUcUzf52V0FZUrP268",
            "status": "unauctioned"
        },
        {
            "id": 180,
            "name": "Suresh Raina",
            "basePrice": 2.5,
            "rating": 10,
            "role": "All Rounder",
            "previousTeam": "NaN",
            "img": "https://lh3.google.com/u/0/d/1Qh900iyWllN1qnNwWmtINo3HA0jEikYV",
            "status": "unauctioned"
        },
        {
            "id": 181,
            "name": "Lasith Malinga",
            "basePrice": 2.5,
            "rating": 10,
            "role": "Bowler",
            "previousTeam": "NaN",
            "img": "https://lh3.google.com/u/0/d/1Z46BzylTSrqB6ZoAdGzqt-PqG6C10tdg",
            "status": "unauctioned"
        },
        {
            "id": 182,
            "name": "Shane Warne",
            "basePrice": 2.5,
            "rating": 10,
            "role": "Bowler",
            "previousTeam": "NaN",
            "img": "https://lh3.google.com/u/0/d/1EFRvvKLtKCdQP86X7DECWjinFrarrEeC",
            "status": "unauctioned"
        }
    ]
}



const auctionSlice = createSlice({
    name: "auction",
    initialState,
    reducers: {
        setSold: (state, action) => {
            state.players[action.payload.index].status = "sold"
        },
        setunauctioned: (state, action) => {
            state.players[action.payload.index].status = "unauctioned"
        },
    }
})

export const { setSold, setunauctioned } = auctionSlice.actions
export default auctionSlice.reducer