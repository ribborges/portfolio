import { Github, ThreeDotsVertical, BoxArrowUpRight } from "react-bootstrap-icons";

import Card from "@/components/Card";
import { Tag, TagContainer } from "@/components/Tag";
import { MenuLink } from "@/components/Input";
import { GridContainer } from "@/components/Container";
import Translator from "@/components/Translator";

export default function Dev() {
    return (
        <GridContainer>
            <Card
                thumb="/static/img/projects/kakebo.webp"
                tags={<TagContainer>
                    <Tag text="TypeScript" className="bg-blue-700" />
                    <Tag text="React Native" className="bg-sky-400" />
                    <Tag text="Expo" className="bg-indigo-950" />
                    <Tag text="Expo Router" className="bg-indigo-950" />
                    <Tag text="Nativewind" className="bg-teal-300" />
                    <Tag text="Zustand" className="bg-purple-500" />
                    <Tag text="SQLite" className="bg-zinc-600" />
                </TagContainer>}
                title={Translator({ path: "portfolio.kakebo.title" })}
                text={Translator({ path: "portfolio.kakebo.description" })}
            >
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.kakebo.code" })} href="https://github.com/ribborges/kakebo" />
            </Card>

            <Card
                thumb="/static/img/projects/cv-creator.webp"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="TailwindCSS" className="bg-sky-300" />
                        <Tag text="i18next" className="bg-zinc-600" />
                        <Tag text="Zustand" className="bg-purple-500" />
                        <Tag text="Axios" className="bg-indigo-500" />
                        <Tag text="AI" className="bg-blue-900" />
                    </TagContainer>
                }
                title={Translator({ path: "portfolio.cvCreator.title" })}
                text={Translator({ path: "portfolio.cvCreator.description" })}
            >
                <MenuLink className="text-sm" icon={<BoxArrowUpRight />} label={Translator({ path: "portfolio.cvCreator.demo" })} href="https://cvcreator.richardborges.dev/" />
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.cvCreator.code" })} href="https://github.com/ribborges/cv-creator/" />
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.cvCreator.aiCode" })} href="https://github.com/ribborges/cv-creator-ai/" />
            </Card>

            <Card
                thumb="/static/img/projects/tasks.webp"
                tags={<TagContainer>
                    <Tag text="Node" className="bg-lime-500" />
                    <Tag text="Express" className="bg-black" />
                    <Tag text="TypeScript" className="bg-blue-500" />
                    <Tag text="React" className="bg-sky-400" />
                    <Tag text="Next.js" className="bg-zinc-800" />
                    <Tag text="React Native" className="bg-sky-400" />
                    <Tag text="Expo" className="bg-indigo-950" />
                    <Tag text="Zustand" className="bg-purple-500" />
                    <Tag text="Axios" className="bg-indigo-500" />
                    <Tag text="JWT" className="bg-rose-600" />
                    <Tag text="TailwindCSS" className="bg-sky-300" />
                    <Tag text="Nativewind" className="bg-teal-300" />
                    <Tag text="MongoDB" className="bg-emerald-500" />
                    <Tag text="REST API" className="bg-black" />
                    <Tag text="Authentication" className="bg-black" />
                </TagContainer>}
                title={Translator({ path: "portfolio.tasks.title" })}
                text={Translator({ path: "portfolio.tasks.description" })}
            >
                <MenuLink className="text-sm" icon={<BoxArrowUpRight />} label={Translator({ path: "portfolio.tasks.demo" })} href="https://tasks.richardborges.dev/" />
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.tasks.webCode" })} href="https://github.com/ribborges/tasks-web" />
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.tasks.mobileCode" })} href="https://github.com/ribborges/tasks-mobile" />
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.tasks.apiCode" })} href="https://github.com/ribborges/tasks-api" />
            </Card>

            <Card
                thumb="/static/img/projects/fisio-home.webp"
                tags={
                    <TagContainer>
                        <Tag text="React Native" className="bg-sky-400" />
                        <Tag text="Expo" className="bg-indigo-950" />
                        <Tag text="Node" className="bg-lime-500" />
                        <Tag text="Express" className="bg-black" />
                        <Tag text="MongoDB" className="bg-emerald-500" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title={Translator({ path: "portfolio.fisioHome.title" })}
                text={Translator({ path: "portfolio.fisioHome.description" })}
            >
                <MenuLink className="text-sm" icon={<ThreeDotsVertical />} label={Translator({ path: "portfolio.fisioHome.details" })} href="https://fisiohome.richardborges.dev/" />
            </Card>

            <Card
                thumb="/static/img/projects/node.webp"
                tags={<TagContainer>
                    <Tag text="TypeScript" className="bg-blue-700" />
                    <Tag text="Node" className="bg-lime-500" />
                    <Tag text="Express" className="bg-black" />
                    <Tag text="MongoDB" className="bg-emerald-500" />
                    <Tag text="JWT" className="bg-rose-600" />
                    <Tag text="REST API" className="bg-black" />
                    <Tag text="Authentication" className="bg-black" />
                </TagContainer>}
                title={Translator({ path: "portfolio.REST.title" })}
                text={Translator({ path: "portfolio.REST.description" })}
            >
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.REST.code" })} href="https://github.com/ribborges/api-with-auth" />
            </Card>

            <Card
                thumb="/static/img/projects/habits.webp"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="TailwindCSS" className="bg-sky-300" />
                        <Tag text="Node" className="bg-lime-500" />
                        <Tag text="SQLite" className="bg-black" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title={Translator({ path: "portfolio.habits.title" })}
                text={Translator({ path: "portfolio.habits.description" })}
            >
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.habits.code" })} href="https://github.com/ribborges/nlw-setup-ignite/" />
            </Card>

            <Card
                thumb="/static/img/projects/cook-app.webp"
                tags={
                    <TagContainer>
                        <Tag text="React Native" className="bg-sky-400" />
                        <Tag text="Expo" className="bg-indigo-950" />
                        <Tag text="Expo Router" className="bg-indigo-950" />
                        <Tag text="Supabase" className="bg-violet-800" />
                        <Tag text="React Native Reanimated" className="bg-sky-400" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title={Translator({ path: "portfolio.cookApp.title" })}
                text={Translator({ path: "portfolio.cookApp.description" })}
            >
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.cookApp.code" })} href="https://github.com/ribborges/cook-app/tree/master" />
            </Card>

            <Card
                thumb="/static/img/projects/cat-fact.webp"
                tags={
                    <TagContainer>
                        <Tag text="React Native" className="bg-sky-400" />
                        <Tag text="Expo" className="bg-indigo-950" />
                        <Tag text="Axios" className="bg-black" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title={Translator({ path: "portfolio.catFact.title" })}
                text={Translator({ path: "portfolio.catFact.description" })}
            >
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.catFact.code" })} href="https://github.com/ribborges/cat-fact-app" />
            </Card>

            <Card
                thumb="/static/img/projects/social-tree.webp"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="SCSS" className="bg-pink-500" />
                    </TagContainer>
                }
                title={Translator({ path: "portfolio.socialTree.title" })}
                text={Translator({ path: "portfolio.socialTree.description" })}
            >
                <MenuLink className="text-sm" icon={<BoxArrowUpRight />} label={Translator({ path: "portfolio.socialTree.demo" })} href="https://lnk.richardborges.dev" />
                <MenuLink className="text-sm" icon={<Github />} label={Translator({ path: "portfolio.socialTree.code" })} href="https://github.com/ribborges/social-tree/" />
            </Card>
        </GridContainer>
    );
}