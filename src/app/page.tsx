'use client'

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner";

import { ExternalLink, Github, Cloud, Database, Server, Globe, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import profile_image from '../../public/profile_image.jpg'
import s3 from '../../public/aws-assets/s3.png'
import ec2 from '../../public/aws-assets/ec2.png'
import lambda from '../../public/aws-assets/lambda.png'
import iam from '../../public/aws-assets/iam.png'
import rds from '../../public/aws-assets/rds.png'
import sqs from '../../public/aws-assets/sqs.png'
import dynomoDB from '../../public/aws-assets/dynomoDB.png'
import cw from '../../public/aws-assets/cw.png'
import ecs from '../../public/aws-assets/ecs.png'
import api from '../../public/aws-assets/api.png'
import cf from '../../public/aws-assets/cf.png'
import sns from '../../public/aws-assets/sns.png'



export default function Portfolio() {

  const copyEmail = () => {
    navigator.clipboard.writeText("james.j.tuttle@gmail.com");
    toast.success("Email copied!", {
      description: "james.j.tuttle@gmail.com has been copied to your clipboard.",
      duration: 3000,
    });
  };

  const projects = [
    {
      title: "Multi-Cloud Infrastructure",
      description:
        "Automated deployment pipeline across AWS, Azure, and GCP using Terraform and Kubernetes for scalable microservices architecture.",
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
      link: "https://github.com/yourname/multi-cloud-infra",
      demo: "https://demo.yourproject.com",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "Serverless Data Pipeline",
      description:
        "Real-time data processing pipeline using AWS Lambda, DynamoDB, and Kinesis for handling millions of events per day.",
      technologies: ["AWS Lambda", "DynamoDB", "Kinesis", "Python"],
      link: "https://github.com/yourname/serverless-pipeline",
      demo: "https://dashboard.yourproject.com",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Container Orchestration Platform",
      description:
        "Custom Kubernetes platform with automated scaling, monitoring, and CI/CD integration for enterprise applications.",
      technologies: ["Kubernetes", "Docker", "Prometheus", "GitLab CI"],
      link: "https://github.com/yourname/k8s-platform",
      demo: "https://platform.yourproject.com",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Cloud-Native Monitoring",
      description:
        "Comprehensive monitoring solution using Grafana, Prometheus, and custom dashboards for multi-cloud environments.",
      technologies: ["Grafana", "Prometheus", "ElasticSearch", "Kibana"],
      link: "https://github.com/yourname/cloud-monitoring",
      demo: "https://monitoring.yourproject.com",
      icon: <Globe className="w-6 h-6" />,
    },
  ]

  const skills = [
    "AWS",
    "Azure",
    "GCP",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Python",
    "Node.js",
    "CI/CD",
    "Monitoring",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-800/10 to-slate-900/20"></div>
        <div className="absolute inset-0 "></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section with Static Icons */}
        <div className="text-center mb-16">
          {/* Profile Image with Static AWS Icons */}
          <div className="relative inline-block mb-18">
            {/* Static AWS Icons around profile - no animation */}
            <div className="absolute inset-0">
              {/* Inner Circle */}
              <div className="absolute inset-0 w-32 h-32 rounded-full border border-green-500">
                {/* Top */}
                <div className="absolute w-6 h-6 top-0 left-1/2 -translate-x-1/2 -translate-y-3">
                  <Image
                    src={s3}
                    alt="AWS S3"
                    width={24}
                    height={24}
                    className="aws-icon-static"
                  />
                </div>
                {/* Right */}
                <div className="absolute w-5 h-5 top-1/2 right-0 translate-x-3 -translate-y-1/2">
                  <Image
                    src={ec2}
                    alt="AWS EC2"
                    width={20}
                    height={20}
                    className="aws-icon-static"
                  />
                </div>
                {/* Bottom */}
                <div className="absolute w-6 h-6 bottom-0 left-1/2 -translate-x-1/2 translate-y-3">
                  <Image
                    src={lambda}
                    alt="AWS Lambda"
                    width={24}
                    height={24}
                    className="aws-icon-static"
                  />
                </div>
                {/* Left */}
                <div className="absolute w-5 h-5 top-1/2 left-0 -translate-x-3 -translate-y-1/2">
                  <Image
                    src={iam}
                    alt="AWS IAM"
                    width={20}
                    height={20}
                    className="aws-icon-static"
                  />
                </div>
              </div>

              {/* Middle Circle - and color */}
              <div className="absolute -inset-4 w-40 h-40 rounded-full border border-green-500/75">
                {/* Top Right */}
                <div className="absolute w-7 h-7 top-2 right-6">
                  <Image
                    src={rds}
                    alt="AWS RDS"
                    width={28}
                    height={28}
                    className="aws-icon-static"
                  />
                </div>
                {/* Bottom Right */}
                <div className="absolute w-6 h-6 bottom-2 right-6">
                  <Image
                    src={sqs}
                    alt="AWS SQS"
                    width={24}
                    height={24}
                    className="aws-icon-static"
                  />
                </div>
                {/* Bottom Left */}
                <div className="absolute w-7 h-7 bottom-2 left-6">
                  <Image
                    src={dynomoDB}
                    alt="AWS DynamoDB"
                    width={28}
                    height={28}
                    className="aws-icon-static"
                  />
                </div>
                {/* Top Left */}
                <div className="absolute w-6 h-6 top-2 left-6">
                  <Image
                    src={cw}
                    alt="AWS CloudWatch"
                    width={24}
                    height={24}
                    className="aws-icon-static"
                  />
                </div>
              </div>

              {/* Outer Circle - and color */}
              <div className="absolute -inset-8 w-48 h-48 rounded-full border border-green-500/75">
                {/* Top */}
                <div className="absolute w-8 h-8 top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <Image
                    src={ecs}
                    alt="AWS ECS"
                    width={32}
                    height={32}
                    className="aws-icon-static"
                  />
                </div>
                {/* Right */}
                <div className="absolute w-7 h-7 top-1/2 right-0 translate-x-4 -translate-y-1/2">
                  <Image
                    src={api}
                    alt="AWS API Gateway"
                    width={28}
                    height={28}
                    className="aws-icon-static"
                  />
                </div>
                {/* Bottom */}
                <div className="absolute w-8 h-8 bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                  <Image
                    src={cf}
                    alt="AWS CloudFront"
                    width={32}
                    height={32}
                    className="aws-icon-static"
                  />
                </div>
                {/* Left */}
                <div className="absolute w-7 h-7 top-1/2 left-0 -translate-x-4 -translate-y-1/2">
                  <Image
                    src={sns}
                    alt="AWS SNS"
                    width={28}
                    height={28}
                    className="aws-icon-static"
                  />
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 p-1 shadow-lg shadow-green-500/75 z-10">
              <Image
                src={profile_image}
                alt="Profile"
                width={120}
                height={120}
                className="w-full h-full rounded-full object-cover bg-slate-800"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 z-10"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">James Tuttle</h1>
          <p className="text-xl text-green-300 mb-4">Cloud Solutions Architect & DevOps Engineer</p>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable, resilient cloud infrastructure and automating complex deployment
            pipelines.
          </p>
          {/* Contact Info */}
          <div className="flex justify-center items-center gap-6 mb-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <button
                onClick={copyEmail}
                className="text-sm hover:text-green-400 transition-colors cursor-pointer"
                title="Click to copy email"
              >
                james.j.tuttle@gmail.com
              </button>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Seattle, WA.</span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 hover:bg-green-500 hover:border-green-500 text-white"
              asChild
            >
              <Link href="https://github.com/jjtuttle" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 hover:bg-green-500 hover:border-green-500 text-white"
              asChild
            >
              <Link href="https://www.linkedin.com/in/jamesjtuttle/" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <Link href="https://calendly.com/tuttle-james" target="_blank">
                Schedule a Call
              </Link>
            </Button>
          </div>

          {/* Skills */}
          <div className="flex justify-center gap-2 flex-wrap max-w-2xl mx-auto">
            {skills.map((skill, i) => (
              <Badge key={i} variant="secondary" className="bg-green-900/30 text-green-300 border border-green-500/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-900/50 text-green-400">{project.icon}</div>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild className="text-slate-400 hover:text-green-400">
                        <Link href={project.link} target="_blank">
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="text-slate-400 hover:text-green-400">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-green-500/30 text-green-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Simple Footer */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-slate-400 mb-4">Let's build something amazing together</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Get In Touch</Button>
        </div>
      </div>
    </div>
  )
}
