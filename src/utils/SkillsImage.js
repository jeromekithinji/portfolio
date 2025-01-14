import gcp from '../Assets/images/skills/gcp.svg'
import html from '../Assets/images/skills/html.svg'
import photoshop from '../Assets/images/skills/photoshop.svg'
import illustrator from '../Assets/images/skills/illustrator.svg'
import docker from '../Assets/images/skills/docker.svg'
import adobeXd from '../Assets/images/skills/adobe-xd.svg'
import afterEffects from '../Assets/images/skills/after-effects.svg'
import css from '../Assets/images/skills/css.svg'
import angular from '../Assets/images/skills/angular.svg'
import javascript from '../Assets/images/skills/javascript.svg'
import nextJS from '../Assets/images/skills/nextJS.svg'
import nuxtJS from '../Assets/images/skills/nuxtJS.svg'
import react from '../Assets/images/skills/react.svg'
import svelte from '../Assets/images/skills/svelte.svg'
import typescript from '../Assets/images/skills/typescript.svg'
import vue from '../Assets/images/skills/vue.svg'
import bootstrap from '../Assets/images/skills/bootstrap.svg'
import bulma from '../Assets/images/skills/bulma.svg'
import capacitorjs from '../Assets/images/skills/capacitorjs.svg'
import coffeescript from '../Assets/images/skills/coffeescript.svg'
import memsql from '../Assets/images/skills/memsql.svg'
import mongoDB from '../Assets/images/skills/mongoDB.svg'
import mysql from '../Assets/images/skills/mysql.svg'
import postgresql from '../Assets/images/skills/postgresql.svg'
import tailwind from '../Assets/images/skills/tailwind.svg'
import vitejs from '../Assets/images/skills/vitejs.svg'
import vuetifyjs from '../Assets/images/skills/vuetifyjs.svg'
import c from '../Assets/images/skills/c.svg'
import cplusplus from '../Assets/images/skills/cplusplus.svg'
import csharp from '../Assets/images/skills/csharp.svg'
import dart from '../Assets/images/skills/dart.svg'
import go from '../Assets/images/skills/go.svg'
import java from '../Assets/images/skills/java.svg'
import julia from '../Assets/images/skills/julia.svg'
import kotlin from '../Assets/images/skills/kotlin.svg'
import matlab from '../Assets/images/skills/matlab.svg'
import php from '../Assets/images/skills/php.svg'
import python from '../Assets/images/skills/python.svg'
import ruby from '../Assets/images/skills/ruby.svg'
import swift from '../Assets/images/skills/swift.svg'
import adobeaudition from '../Assets/images/skills/adobeaudition.svg'
import aws from '../Assets/images/skills/aws.svg'
import deno from '../Assets/images/skills/deno.svg'
import django from '../Assets/images/skills/django.svg'
import firebase from '../Assets/images/skills/firebase.svg'
import gimp from '../Assets/images/skills/gimp.svg'
import git from '../Assets/images/skills/git.svg'
import graphql from '../Assets/images/skills/graphql.svg'
import lightroom from '../Assets/images/skills/lightroom.svg'
import materialui from '../Assets/images/skills/materialui.svg'
import nginx from '../Assets/images/skills/nginx.svg'
import numpy from '../Assets/images/skills/numpy.svg'
import opencv from '../Assets/images/skills/opencv.svg'
import premierepro from '../Assets/images/skills/premierepro.svg'
import pytorch from '../Assets/images/skills/pytorch.svg'
import selenium from '../Assets/images/skills/selenium.svg'
import strapi from '../Assets/images/skills/strapi.svg'
import tensorflow from '../Assets/images/skills/tensorflow.svg'
import webix from '../Assets/images/skills/webix.svg'
import wordpress from '../Assets/images/skills/wordpress.svg'

import azure from '../Assets/images/skills/azure.svg'
import blender from '../Assets/images/skills/blender.svg'
import fastify from '../Assets/images/skills/fastify.svg'
import figma from '../Assets/images/skills/figma.svg'
import flutter from '../Assets/images/skills/flutter.svg'
import haxe from '../Assets/images/skills/haxe.svg'
import ionic from '../Assets/images/skills/ionic.svg'
import markdown from '../Assets/images/skills/markdown.svg'
import microsoftoffice from '../Assets/images/skills/microsoftoffice.svg'
import picsart from '../Assets/images/skills/picsart.svg'
import sketch from '../Assets/images/skills/sketch.svg'
import unity from '../Assets/images/skills/unity.svg'
import wolframalpha from '../Assets/images/skills/wolframalpha.svg'

import canva from '../Assets/images/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}