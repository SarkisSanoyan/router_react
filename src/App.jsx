import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogPage } from "./pages/BlogPage";
import { DetailPage } from "./pages/DetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { Layout } from "./components/Layout";


export function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />}>
                    <Route path='team' element={<div>Team</div>} />
                    <Route path='location' element={<div>Location</div>} />
                </Route>
                <Route path='contact' element={<ContactPage />} />
                <Route path='post' element={<BlogPage />} />
                <Route path='post/:id' element={<DetailPage />} />
                <Route path='blog' element={<Navigate to='/post' />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

