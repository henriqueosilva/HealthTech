<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit06bc5d0817c82c2c7dcabcbd9516e049
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit06bc5d0817c82c2c7dcabcbd9516e049', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit06bc5d0817c82c2c7dcabcbd9516e049', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit06bc5d0817c82c2c7dcabcbd9516e049::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
